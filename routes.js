
const express = require('express');
const routes = express.Router();
const pool = require ("./connection");//connection pool for PG database
const { Connection } = require('pg');
// logic for our endpoints
//const employernetwork = [];


// function getTable(req, res) {
//     pool.query("select * from employernetwork order by id").then(result =>
//     {
//     res.json(result.rows);
//     });
//     }

routes.get('/employernetwork', (req, res) => {
    console.log("hit employernetwork")
    pool.query("SELECT * FROM employernetwork;").then( (results) => {
        res.json("getting all employers...");
    })
});

// make the DB data match the front end format
//const employernetwork = results.rows.map((result) => {
//    const newResult = result;

   // console.log(result.rows);

//});

module.exports = routes;


// routes.get('/planets', (_, res) => {
// 	res.json(planets);
// });
// // localhost:3000/2
// routes.get('/planets/:name', (req, res) => {
// 	// this is the logic to a single item by id
// 	// whatever you have after the : is set to the params variable
// 	// for example:
// 	const name = req.params.name; // 2
// 	// use this id as a way of finding your
// 	// item
// 	const item = planets.find(planet => {
// 		return planet.name === name;
// 	});
// 	if (!item) {
// 		res.status(404).json('Not found');
// 	} else {
// 		res.json(item);
// 	}
// });
// // accept POST request at URI: /routes
// routes.post('/planets', (req, res) => {
// 	// Get item from body
// 	const newPlanet = req.body;
// 	// Add to array
// 	routes.push(newPlanet);
// 	res.status(201); // return 201 status code
// 	res.json(newPlanet);
// });
// routes.get('/planets-limited', (req, res) => {
// 	const limit = req.query.limit;
// 	if (limit < planets.length) {
// 		const planetsLimited = planets.slice(0, parseInt(limit));
// 		res.json(planetsLimited);
// 	} else {
// 		res.json(planets);
// 	}
// });
// // export module so it's usable in other files


// routes.delete('/planets/:id', (req, res) => {
//     const id = req.params.id;
//     pool.query("DELETE FROM planets WHERE id=$1", [id]).then( () => {
//         res.status(204);
//         res.json("Deleted")
//     })
// })