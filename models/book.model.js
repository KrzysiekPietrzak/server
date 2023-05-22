const mongoose = require('mongoose')
//autoIncrement = require('mongoose-auto-increment')

mongoose.connect(
  `mongodb+srv://a:a@c0.jclsh5d.mongodb.net/auth?retryWrites=true&w=majority`, 
);

//const db = mongoose.connection;
//autoIncrement.initialize(db);

const Book = new mongoose.Schema({
    title: {type:String, required: true},
    Author: {type:String, required: true},
    id: {type:Number, required: true},
},{
    collection:'book'}
    )
  //  mongoose.Schema(autoIncrement.plugin,{model:'Book',field:"bookId"});


const model = mongoose.model('BookData',Book)

module.exports = model