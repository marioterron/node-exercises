var fs = require('fs');
var fileToRead = process.argv[2];

console.log('Reading the file ' + fileToRead + '..');
fs.readFile(fileToRead, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    console.log('Returning the values of the file as a array:');
    var aContentFile = contentFile.split(' ');
    console.log(aContentFile);
});