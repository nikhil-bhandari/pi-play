var morgan = require('morgan');
var express = require("express");
var bodyParser = require('body-parser');
var config = require("./config");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

require("./routes")(app);

app.listen(config.port, function () {
    console.log("Server running at http://localhost:" + config.port);
});

