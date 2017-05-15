# Node Exercises

## 0. Calculator Node

Create a `app.js` that `require` another file called `calculator.js` When we call `node app.js` we should show in the console the following:

`The sum of 3 & 7 is: 10
The multiplication of 3 & 7 is: 21`

`app.js` should only show in the console the result of calling the functions `sum` & `multiplication`

These methods should be defined (and exported) in `calculator.js`

### Phase 2

Create a folder called operations and create in every folder a file exporting every operation needed in the main `app.js` file

`app.js
operations/
    sum.js
    multiplication.js
    substraction.js
    division.js`
    
### Phase 3

Install the module `moment` and use it to show the current time in this way:

`Today is : Monday, October 31st 2016, 10:08:34 am
The sum of 3 & 7 is: 10
The multiplication of 3 & 7 is: 21`

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 1. Connection to the server

Write a node.JS program that execute a connection to server and return success message like _"Success, i'm listening from port: 3000"_

Hint: Yo u need npm module - http

### Extra

Set the port of the connection using an environment variable PORT

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 2. Show Content

Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

`node app.js test.txt`

Hint: You need npm module - `fs`

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 3. HTML Code

Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file `link.txt`

_Hint: You need npm module -> [`request`](https://github.com/request/request)_

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


##4. File list

Write a node.JS program that list the content of the current directory indicating if is a directory or a file

    $ node ex4.js 
    FILE:ex1.js
    FILE:ex2.js
    FILE:ex3.js
    FILE:ex4.js
    FILE:getLinksNode.js
    FILE:link.txt
    DIR :node_modules
    FILE:recursiveContentsDir.js
    FILE:results.txt
    FILE:test.txt

_Hint: You need `fs.readdirSync`, `fs.lstatSync` and `isDirectory()`_

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 5. Writing on txt

Write a node.JS program that creates a txt file with the text passed as a parameter

    $ node ex5.js "hey ho! let's go"
    The file was saved!
    $ cat myText.txt 
    hey ho! let's go

_Hint: You need `fs.writeFile`_

### Extra:

Improve the previous exercise to user the first parameter as the name of the destination file

### More Extra:

Improve the previous exercise to also read and shows in the console the content of the file

    $ node ex5.js mySuperText.txt "it's a long way to the top..."
    The file was saved!
    it's a long way to the top...

    $ cat mySuperText.txt 
    it's a long way to the top...
   
- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)
 
    
## 6. Processing values

Write a node program that process local txt and return values as a Array.

_Hint: You need npm module -> concat-stream_

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 6. Processing values

Write a node program that process local txt and return values as a Array.

_Hint: You need npm module -> concat-stream_

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 7. Parse external webpage (difficult!!)

Write a node program that read the page https://nodejs.org/api/all.html and writes in a file (and shows it content after reading it) the internal links that contain some text passed as a parameter.

$ node getLinksNode.js createServer
The file was saved!
https://nodejs.org/api/all.html#http_http_createserver_requestlistener
https://nodejs.org/api/all.html#https_https_createserver_options_requestlistener
https://nodejs.org/api/all.html#net_net_createserver_options_connectionlistener
https://nodejs.org/api/all.html#tls_tls_createserver_options_secureconnectionlistener

$ node getLinksNode.js readFile
The file was saved!
https://nodejs.org/api/all.html#fs_fs_readfile_file_options_callback
https://nodejs.org/api/all.html#fs_fs_readfilesync_file_options

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


##8. Show Hour
Write a node.JS program that shows you the local hour of server.

_Hint: You need npm module -> strftime_

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


##9. Compare values

Write a node.JS program that search information in .txt file and returns you how much coincidences find.

If you search about "John", and in your txt files are 2 John, should return 2

Hint: You can try save all data in one array and compare with search..

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)


## 10. Saving
Write a node.JS program that sum all integers saved in other txt file.

- [Code](https://github.com/MarioTerron/javascript-exercises/blob/master/01-first-steps/js/integer-numbers-range.js)
