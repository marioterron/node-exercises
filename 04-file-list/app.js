var fs = require("fs"),
    path = require("path");

var p = "./"
fs.readdir(p, function (err, files) {
    if (err) throw err;

    files.forEach(function (file) {
        if (fs.statSync(file).isDirectory()) console.log ("FOLDER: " + file);
        else console.log("FILE: " + file);
    });
});
