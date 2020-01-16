////////////// LOAD DATA////////////
//// from db.JSON//
// var notesObject = require("../../db/db");
var fs = require("fs");
const path = require('path');
/////////ROUTING////////

module.exports = function (app) {
    ///API GET requests 


    app.get("/api/notes", function (req, res) {
        //sends database file to display
        res.sendFile(path.join(__dirname, "../../db/db.json"))
    });
    app.post("/api/notes", function (req, res) {
        // reads our database file
        fs.readFile(path.join(__dirname, "../../db/db.json"), "utf-8", function (err, data) {
            // turns into object
            let database = JSON.parse(data);

            // pushed new note into database
            database.push(req.body);
            // adds unique id every time new note is added
            for (let i = 0; i < database.length; i++) {
                database[i].id = i;
            }
            // rewrites our database file with the new info
            fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(database), function (err) {
                if (err) throw err;
            });

        });
    })
    app.delete("/api/notes/:id", function (req, res) {
        //reads our database file
        fs.readFile(path.join(__dirname, "../../db/db.json"), "utf-8", function (err, data) {
            //turns into object
            let database = JSON.parse(data);
            //grabs id from url
            let id = parseInt(req.params.id);
            // filters notes that do not match that id into new  variable
            let filteredDatabase = database.filter(note => note.id != id);
            // writes new data back to database
            fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(filteredDatabase), function (err) {
                if (err) throw err;
            })
        });

    });

}
