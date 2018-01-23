const express = require('express');

//init app
const app = express();


//laod view engine

//home route
app.get('/', function(req, res){
	res.send('Hello World!');
});


// start serverW
app.listen(3000, function(){
	console.log('server started on port 3000...');
});