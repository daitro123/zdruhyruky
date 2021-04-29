const data = require("./data");

const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");

app.use(
	cors({
		origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
	})
);

app.get("/", (req, res) => {
	res.json(data);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

//https://www.robinwieruch.de/node-express-server-rest-api
