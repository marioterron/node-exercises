var fs = require('fs');
var fileName = 'nums.txt'
var wordToFind = process.argv[2].toLowerCase();


fs.readFile(fileName, 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var aWordsText = contentFile.toLowerCase().split(' ');
    var aFilteredWords = aWordsText.filter(function(word){
        return word.includes(wordToFind);
    })
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});