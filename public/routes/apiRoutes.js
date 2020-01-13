////////////// LOAD DATA////////////
//// from db.JSON//
// var notesObject = require("../../db/db");
var fs = require("fs");
const path = require('path');
/////////ROUTING////////

module.exports = function(app){
    ///API GET requests 


    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join())



    // fs.readFile("db/db.json", (err,data) => {
    //     if (err) throw err;
    //     let object = JSON.parse(data);
    //     // return object;
    //     res.JSON(object);
    // })
   
    })
}