const express = require("express");
const data = require("../data");
const router = express.Router();

// items routes

router.get("/", (req, res) => {
	res.json(data);
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
});

module.exports = router;
