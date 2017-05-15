var fs = require('fs');
var fileToRead = process.argv[2];


// Asynchronous Way
console.log('Reading the file: ' + fileToRead);
fs.readFile(fileToRead, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    console.log(contentFile);
});

// Synchronous Way
// console.log('Reading the file: ' + fileToRead);
// var contentFile = fs.readFileSync(fileToRead, 'utf8') {  
//     console.log(contentFile);
// });
