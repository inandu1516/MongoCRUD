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
// Serve static content for the app from the “public” directory in the application directory:
// GET /public
app.use(express.static(__dirname + '/public'));


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


/**
 * Because it is asynchronous, the remove command is sended to the server but it doesn't wait
 * the server to come back, (not block). So by the time we send the remaining data, maybe te remove
 * action have not yet been done. So te be sure to call them wen we have removed, we have to place
 * the Form.find inside the callback function of the Form.remove.
 */
app.delete('/form/:id', function (req, res) {
    Form.find(function (err, data) {
        //remove the element with the matched id, if success -> callback function
        Form.remove({_id: req.params.id}, function (err, count) {
            console.log(err);
            console.log(count);

            // //then sends back the remaining elements
            Form.find(function (err, data) {
                res.json(data);
            });

        });
    });
});

//http://localhost:3000/find/572c7394202dce0c1c193ae2
app.get('/find/:id', function (req, res) {
    Form.findById(req.params.id, function (err, data) {
        res.json(data);
    });
});

app.listen(3000);