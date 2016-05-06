/**
 * Created by Inge on 06/05/2016.
 * \MongoCRUD> :
 * npm init
 * npm install express --save
 * node ExpressServer.js
 */

//Express
var express = require('express');
var app = express();

//Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CRUD');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connected...OK");
    var FormSchema = new mongoose.Schema({
        name: String,
        created: {type: Date, default: Date.now}
    }, {collection:"form"});
    Form = mongoose.model("Form", FormSchema);
});

//Routing
app.get('/', function (req, res) {
    res.send("hello world");
});

app.get('/find', function (req, res) {
    Form.find(function (err, data) {
        res.json(data);
    });
});

//http://localhost:3000/find/572c7394202dce0c1c193ae2
app.get('/find/:id', function (req, res) {
    Form.findById(req.params.id, function (err, data) {
        res.json(data);
    });
});

app.listen(3000);