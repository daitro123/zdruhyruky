const express = require("express");
const data = require("../data");
const router = express.Router();

// items routes

router.get("/", (req, res) => {
	const queryStrings = req.query;

	if (!queryStrings) {
		res.json(data);
	} else {
		let filteredArr = data.result;

		for (key in queryStrings) {
			if (Array.isArray(queryStrings[key])) {
				filteredArr = filteredArr.filter((predmet) =>
					queryStrings[key].includes(predmet[key].toString())
				);
			} else if (key === "cenaOd") {
				filteredArr = filteredArr.filter(
					(predmet) => predmet[key] >= parseInt(queryStrings[key])
				);
			} else if (key === "cenaDo") {
				filteredArr = filteredArr.filter(
					(predmet) => predmet[key] <= parseInt(queryStrings[key])
				);
			} else {
				filteredArr = filteredArr.filter((predmet) => predmet[key] == queryStrings[key]);
			}
		}
		res.json({ result: filteredArr });
	}
});

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const result = data.result.filter((item) => item.id === id);
	res.json(result[0]);
});

module.exports = router;
