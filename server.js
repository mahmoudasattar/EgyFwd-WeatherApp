// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port,listening);
function listening (){
	console.log(`local server listening: port ${port}`);
}
// Setup Get Route to home page
app.get('/all',function(req,res){
	console.log(`Get: `);
	console.log(projectData);
	res.send(projectData);
});
// Setup Post Route
app.post('/post',function(req,res){
	projectData.feeling = req.body.feeling;
	projectData.city = req.body.city;
	projectData.date = req.body.date;
	projectData.temp = req.body.temp;
	console.log(`Post: `);
	console.log(projectData);
});




