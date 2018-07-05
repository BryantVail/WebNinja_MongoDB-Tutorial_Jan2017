//Author.js
"strict mode";

const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const BookSchema    = new Schema({
    title:{
        type        : String,
        required    : true
    },
    yearPublished:{
        type        : Date,
        required    : true
    },
    pageCount :{
        type        : Number,
        required    : true
    }
});//end BookSchema
const AuthorSchema  = new Schema({

    name :{
        type        : String,
        required    : true
    },
    age:{
        type        : Number,
        required    : true
    },
    books:[BookSchema]
});


const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;








