const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const router = express.Router();

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
function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);

		req.user = user;

		next();
	});
}

// create MariaDB connection
const mariadb = require("mariadb");
const pool = mariadb.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	connectionLimit: 50,
	database: process.env.DB_DATABASE,
});

router.use(express.json());

/****************************************/
/*			   REGISTER USER			*/
/****************************************/
router.post("/register", (req, res) => {
	const { username, email, password } = req.body;

	// VALIDATE INPUT
	const validation = schema.validate({ username, email, password });

	if (validation.error) {
		return res.status(400).json({ error: validation.error.details[0].message });
	}

	// REGISTER USER
	const register = async () => {
		const conn = await pool.getConnection();

		// CHECK IF USER EXISTS - username or email
		const checkUserExists = await conn.query(
			"SELECT email, username FROM users WHERE (email = ? OR username = ?)",
			[email, username]
		);

		// IF DOESNT EXIST, INSERT INTO DB
		if (!checkUserExists.length) {
			const hashedPw = await bcrypt.hash(password, 10);
			try {
				const insert = await conn.query(
					"INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
					[username, email, hashedPw]
				);

				// CREATE JWT TOKEN UPON REGISTRATION
				const token = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "3h" });
				return res.json({ accessToken: token });
			} catch (error) {
				return error;
			}
		} else {
			if (username === checkUserExists[0].username) {
				return res.status(401).json({ error: "Username already exists" });
			} else {
				return res.status(401).json({ error: "Email already exists" });
			}
		}
	};

	register();
});

/****************************************/
/*				LOGIN USER				*/
/****************************************/
router.post("/login", (req, res) => {
	const { username, password } = req.body;

	// LOGIN USER
	const login = async () => {
		const conn = await pool.getConnection();

		// FIND
		const checkUser = await conn.query(
			"SELECT username, password FROM users WHERE username = ?",
			[username]
		);

		if (!checkUser.length) return res.status(401).json({ error: "User not found!" });

		// IF EXISTS, COMPARE PASSWORD WITH DB
		const isPasswordOK = await bcrypt.compare(password, checkUser[0].password);
		if (isPasswordOK) {
			const token = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "3h" });
			return res.json({ message: "Successful login!", accessToken: token });
		} else {
			return res.status(401).json({ error: "Incorrect password!" });
		}
	};

	login();
});

module.exports = router;
