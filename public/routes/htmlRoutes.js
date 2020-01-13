var fs = require("fs");
const path = require('path');



/////////ROUTING////////

module.exports = function(app){
    ///API GET requests 
    //handles user visiting different pages

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname,"../notes.html"))
    });

    app.get("*", function(re,res){
        res.sendFile(path.join(__dirname,"../index.html"))
    });

};