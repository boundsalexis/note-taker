///////////////// DEPENDENCIES////////////
var express = require("express");

//////////////// CONFIGURE EXPRESS/////////

/// create server
var app = express();

//set initial port
var PORT = process.env.PORT || 3000;

// sets our server to handle parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////////ROUTING///////////////////

require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

///////////////LISTENER aka LAUNCHER///////////

app.listen(PORT, function(){
    console.log("App listening on Port: " + PORT);
});