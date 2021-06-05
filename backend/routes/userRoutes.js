const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const pool = require("../server");
const knex = require("../db");
const dotenv = require("dotenv").config();

// JOI schema for validation
const schema = Joi.object({
	username: Joi.string().alphanum().min(4).max(25).required().messages({
		"string.alphanum": "Jméno musí být složeno pouze z písmen a čísel.",
		"string.min": "Jméno musí mít alespoň 4 znaky.",
		"string.max": "Jméno může mít max 25 znaků.",
		"any.required": "Jméno je povinné pole.",
	}),
	email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
		"string.email": "Nesprávný formát emailu.",
		"any.required": "Jméno je povinné pole.",
	}),
	password: Joi.string().required().min(6).messages({
		"string.min": "Heslo musí mít alespoň 6 znaků.",
		"any.required": "Heslo je povinné pole.",
	}),
});

// JWT middleware func for authentication
function checkIfTokenExists(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null) {
		req.error = { message: "No token found!" };
	}

	try {
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		res.json({ username: decoded.username, accessToken: token });
	} catch (error) {
		req.error = { error };
		next();
	}
}

function verifyToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	try {
		if (token == null) {
			throw new Error("No token found!");
		}

		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = { username: decoded.username, accessToken: token };
		next();
	} catch (error) {
		next(error);
	}
}

router.use(express.json());

/****************************************/
/*			   REGISTER USER			*/
/****************************************/
router.post("/register", checkIfTokenExists, (req, res) => {
	const { full_name, username, email, password } = req.body;

	// VALIDATE INPUT
	const validation = schema.validate({ username, email, password });

	if (validation.error) {
		return res.status(400).json({ error: validation.error.details[0].message });
	}

	// REGISTER USER
	const register = async () => {
		const checkUserExists = await knex("users")
			.select("email", "username")
			.where((builder) => {
				builder.where("email", email).orWhere("username", username);
			});
		console.log(checkUserExists);

		// IF DOESNT EXIST, INSERT INTO DB
		if (!checkUserExists.length) {
			try {
				const hashedPw = await bcrypt.hash(password, 10);

				const insert = await knex("users").insert({
					full_name: full_name,
					username: username,
					email: email,
					password: hashedPw,
				});
				// CREATE JWT TOKEN UPON REGISTRATION
				const token = jwt.sign({ username, id: insert[0] }, process.env.TOKEN_SECRET, {
					expiresIn: "3h",
				});
				return res.json({ username, id: insert[0], accessToken: token });
			} catch (error) {
				throw new Error("Error has occurred when registering the user");
			}
		} else {
			if (username === checkUserExists[0].username) {
				return res.status(401).json({ error: "Uživatelské jméno již existuje" });
			} else {
				return res.status(401).json({ error: "Tento email už existuje" });
			}
		}
	};

	register();
});

/****************************************/
/*				LOGIN USER				*/
/****************************************/
router.post("/login", checkIfTokenExists, (req, res) => {
	const { username, password } = req.body;

	// LOGIN USER
	const login = async () => {
		// FIND
		const checkUser = await knex
			.select("username", "id", "password")
			.from("users")
			.where("username", username);

		console.log(checkUser);

		if (!checkUser.length) return res.status(401).json({ error: "Uživatel nenalezen!" });

		// IF EXISTS, COMPARE PASSWORD WITH DB
		const isPasswordOK = await bcrypt.compare(password, checkUser[0].password);
		if (isPasswordOK) {
			const token = jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: "3h" });
			return res.json({ username, accessToken: token });
		} else {
			return res.status(401).json({ error: "Nesprávné heslo!" });
		}
	};

	login();
});

/****************************************/
/*			  GET USER ACCOUNT			*/
/****************************************/
router.get("/ucet", verifyToken, (req, res) => {
	const { username } = req.user;

	const getUser = async () => {
		try {
			// FIND
			const user = await knex
				.select("full_name", "username", "email", "user_description", "portrait")
				.from("users")
				.where("username", username);
			// const user = await conn.query(
			// 	"SELECT full_name, username, email, user_description, portrait FROM users WHERE username = ?",
			// 	[username]
			// );

			return res.json({ user: user });
		} catch (error) {
			res.status(401).json({ error });
		}
	};

	getUser();
});

module.exports = router;
