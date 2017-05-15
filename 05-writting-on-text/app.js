var fs = require ('fs');
var nameFile = process.argv[2] + ".txt";
var textToWrite = process.argv[3];

fs.writeFile(nameFile, textToWrite, function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile(nameFile, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    console.log(contentFile);
});