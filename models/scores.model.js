const mongoose = require('mongoose');

const Scores = new mongoose.Schema({
    user: {type:String},
    book: {type:mongoose.Schema.Types.ObjectId},
},{
    collection:'scores'}
    )


const model = mongoose.model('ScoresData',Scores)

module.exports = model