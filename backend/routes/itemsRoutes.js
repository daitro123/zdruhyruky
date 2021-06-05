const express = require("express");
const { default: SQL } = require("sql-template-strings");
const data = require("../data");
const router = express.Router();
const pool = require("../db");

router.get("/", (req, res) => {
	const getItems = async () => {
		const conn = await pool.getConnection();
		const items = await conn.query(`SELECT items.*, COUNT(liked_items.item_id) AS liked 
											FROM items
											LEFT JOIN liked_items
											ON items.item_id = liked_items.item_id
											AND liked_items.user_id = 6
											GROUP BY items.item_id;`);
		conn.release();

		res.json({ items });
	};
	getItems();
});

router.get("/search", (req, res) => {
	const queryStrings = req.query;

	res.send(queryStrings);

	const getItems = async () => {
		const conn = await pool.getConnection();
		const items = await conn.query(SQL`SELECT items.*, COUNT(liked_items.item_id) AS liked 
											FROM items
											LEFT JOIN liked_items
											ON items.item_id = liked_items.item_id
											AND liked_items.user_id = 6
											GROUP BY items.item_id;`);
		conn.release();

		res.json({ items });
	};
	// getItems();
});

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const getItem = async () => {
		const conn = await pool.getConnection();
		const item = await conn.query(`SELECT * FROM items WHERE item_id = ?`, id);
		const images = await conn.query({
			sql: "SELECT image_url FROM items_images WHERE item_id = ?",
			values: id,
		});

		conn.release();

		const flattenImgArr = images.map((image) => image.image_url);

		res.json({ ...item[0], images: flattenImgArr });
	};
	getItem();
});

module.exports = router;
