var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://www.skylabcoders.com/es/';
var fileName = "links.txt";
var textToWrite = '';
var action = process.argv[2];

if (action == 'createServer') {
    request(url, function(err, resp, body) {
        if (err) throw err;
        
        $ = cheerio.load(body);
        $('a').each(function(index, link) {
            textToWrite += ($(link).attr('href') + '\n');
        });

        fs.writeFile(fileName, textToWrite, function(err) {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
} else if (action == 'readFile')  {
    fs.readFile(fileName, 'utf8', function(err, contentFile) {  
        if (err) throw err;
        console.log(contentFile);
    });
}





