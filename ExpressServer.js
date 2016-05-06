/**
 * Created by Inge on 06/05/2016.
 * \MongoCRUD> :
 * npm init
 * npm install express --save
 * node ExpressServer.js
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("hello world");
});

app.listen(3000);