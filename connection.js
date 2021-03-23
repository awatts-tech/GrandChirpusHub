const { Pool } = require('pg');

try {
	// When not running via Heroku, this will load the .env file.
	require('dotenv').config();
} catch (e) {
	// When running with Heroku, dotenv doesn't need to be available.
}
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
	connectionString: connectionString,
	ssl: connectionString.includes('localhost')
		? false
		: { rejectUnauthorized: false },
});

module.exports = pool;

//const { Pool } =
//require("pg");
const credentials = new
Pool({
user: "wffubbjdlbdymm",
password: "bd288743c9cb8ed4115b80b75702f68c2fab144ec84b044267497418701adc2cdis",
host: "ec2-54-164-241-193.compute-1.amazonaws.com",
port: 5432,
database: "dcpbo4v81p9l52",
ssl: false
});
module.exports =
credentials;