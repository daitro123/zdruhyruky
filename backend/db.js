const dotenv = require("dotenv").config();
// MARIA DB connection
const mariadb = require("mariadb");
const pool = mariadb.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	connectionLimit: 50,
	database: process.env.DB_DATABASE,
});

module.exports = {
	getConnection: () => {
		return pool.getConnection();
	},
};
