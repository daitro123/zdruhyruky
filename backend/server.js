const data = require("./data");
const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");

// express routes
const itemsRoutes = require("./routes/itemsRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(
	cors({
		origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
	})
);

app.get("/api", (req, res) => {});

// routes
app.use("/api/items", itemsRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

//https://www.robinwieruch.de/node-express-server-rest-api
