var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej;');
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    stringifyFile = req.params.note
    fs.appendFile('./test.json', stringifyFile  + '\r\n', function (err) {
        if (err) throw err;
        console.log('file has been updated');
    });

});
var server = app.listen(3000);
