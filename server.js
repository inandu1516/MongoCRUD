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
    console.log("We are connected!");
    /**
     * Mongoose will validate the data entered against this Schema defined
     * if misstype name of field or wrong data type its gonna complain
     */
    var FormSchema = new mongoose.Schema({
        name: String,
        created: Date
    });

    var Form = mongoose.model("Form", FormSchema);

    var form1 = new Form({name: "Form 1", created: new Date()});
    /**
     * save() insert date (it has to match the schema defined)
     */
    form1.save();

});