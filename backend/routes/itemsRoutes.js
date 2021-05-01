const express = require("express");
const data = require("../data");
const router = express.Router();

// items routes

router.get("/", (req, res) => {
	res.json(data);
});

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const result = data.result.filter((item) => item.id === id);
	res.json(result[0]);
});

module.exports = router;
