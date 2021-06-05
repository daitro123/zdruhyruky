const express = require("express");
const router = express.Router();
const knex = require("../db");

router.get("/", (req, res) => {
	knex.select("items.*")
		.count("liked_items.item_id as liked")
		.from("items")
		.leftJoin("liked_items", (builder) => {
			builder
				.on("items.item_id", "liked_items.item_id")
				.on("liked_items.user_id", knex.raw("?", [6]));
		})
		.groupBy("items.item_id")
		.then((items) => res.json({ items }))
		.catch((err) => console.log(err));
});

router.get("/search", (req, res) => {
	const queryStrings = req.query;

	knex.select()
		.from("items")
		.then((rows) => res.json(rows))
		.catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const getItem = async () => {
		const item = await knex.select().from("items").where("item_id", id);
		const images = await knex.select("image_url").from("items_images").where("item_id", id);
		const flattenImgArr = images.map((image) => image.image_url);

		res.json({ ...item[0], images: flattenImgArr });
	};
	getItem();
});

module.exports = router;
