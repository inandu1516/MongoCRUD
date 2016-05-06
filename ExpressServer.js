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
    console.log("Connected.....port 3000");
});

app.get('/find', function (req, res) {
    res.send("finding data...");
    console.log("directing to .../find");
    Form.findById("572c7394202dce0c1c193ae2", function (err, data) {
        console.log("\nData finded:\n" + data);
    });
});

app.listen(3000);