////////////// LOAD DATA////////////
//// from db.JSON//
// var notesObject = require("../../db/db");
var fs = require("fs");
const path = require('path');
/////////ROUTING////////

module.exports = function(app){
    ///API GET requests 


    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname,"../../db/db.json"))
    });
    app.post("/api/notes", function(req, res) {
        fs.readFile("../../db/db.json", function(err, data){
        let json = JSON.parse(data);
        req.body.journal = Date.now();
        json.push(req.body);
        fs.writeFile("../../db/db.json", JSON.stringify(json));
        }) 
    });

}
