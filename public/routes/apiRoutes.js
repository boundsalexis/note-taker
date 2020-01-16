////////////// LOAD DATA////////////
//// from db.JSON//
// var notesObject = require("../../db/db");
var fs = require("fs");
const path = require('path');
/////////ROUTING////////

module.exports = function (app) {
    ///API GET requests 


    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../../db/db.json"))
    });
    app.post("/api/notes", function (req, res) {

        fs.readFile(path.join(__dirname, "../../db/db.json"), "utf-8", function (err, data) {
            let database = JSON.parse(data);
            console.log(database);
            database.push(req.body);

            for (let i = 0; i < database.length; i++) {
                database[i].id = i;
            }
            let stuff = JSON.stringify(database);
            fs.writeFile(path.join(__dirname, "../../db/db.json"), stuff, function (err) {
                if (err) throw err;
            });

        });
    })
    app.delete("/api/notes/:id", function (req, res) {
        console.log("delete clicked");
        fs.readFile(path.join(__dirname, "../../db/db.json"), "utf-8", function (err, data) {
            let database = JSON.parse(data);
            let id = parseInt(req.params.id);
            let filteredDatabase = database.filter(note => note.id != id);

            fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(filteredDatabase), function (err) {
                if (err) throw err;
            })
        });

    });

}
