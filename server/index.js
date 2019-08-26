var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json())

//endpoints


var port = 4001
app.listen(port, () => { 
    console.log(`Server is listening on port: ${port}`) 
} )
