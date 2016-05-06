/**
 * Created by Inge on 06/05/2016.
 * \MongoCRUD> :
 *  npm install mongoose
 *  node server.js
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CRUD');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connected...OK");
    /**
     * Schema Specification
     * defines data types of the particular collection
     */
    var FormSchema = new mongoose.Schema({
        name: String,
        created: {type: Date, default: Date.now}
    }, {collection:"form"});

    /**
     * Data Model Collection
     * the object to make CRUDs for this collection
     */
    var Form = mongoose.model("Form", FormSchema);

    var form1 = new Form({name: "Form 1"});
    var form2 = new Form({name: "Form 2"});

    /** insert date */
    form1.save();
    form2.save();

    /**
     * Asynchronous operation, program doesn't stop,
     * it waits for the callback with the data asked for.
     * When data comes, it displays the callback function passed.
     */
    Form.find(receiveData);

    function receiveData(err, data) {
        console.log(err);       //displays null if no error
        console.log(data);     //displays the array collection
    }

});