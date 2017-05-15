var request = require('request');
var fs = require('fs');

var fileToRead = process.argv[2];

// fs.readFile(fileToRead, 'utf8', function(err, url) {  
//     if (err) throw err;
//     
//     request(url, function (error, response, body) {
//       console.log('body:', body);                                 // Print the HTML for the Google homepage.
//     });
// });

// Only show the title of the page

fs.readFile(fileToRead, 'utf8', function(err, url) {  
    if (err) throw err;
    
    request(url, function (error, response, body) {
      var titleWebPage = body.match(/<title>(.*)<\/title>/i)[1]
      console.log("URL: " + url)
      console.log("TITLE: " + titleWebPage)
    });
});

