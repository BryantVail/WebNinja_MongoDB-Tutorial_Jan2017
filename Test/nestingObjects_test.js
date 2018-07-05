//nestingObjects_test.js

const assert        = require("assert");
const mongoose      = require("mongoose");
const Author        = require("../Models/Author");


describe("nested Objects, Author>Books", function(){
    let newAuthor;

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
        });

        newAuthor = new Author({
            name:"Roger",
            age: 35,
            books:[
                {title:"get There", pageCount:300, yearPublished:1990}
            ]
        });

        newAuthor.save().then(function(){
            done();
        });
    });


    it("create nested record & access books within an Author", function(done){
        
        Author.findOne({name: "Roger"}).then(function(data){
            assert(data.books.length === 1);
            done();
        });
    }); //end it("create nested record")

    //add book to existing author
    it("add book to existing Author", function(done){
        Author.findOne({name: "Roger"}).then(function(data){
            //add book to existing books array/ author
            data.books.push({title:"carry on old man", pageCount:566, yearPublished: Date(1990)});
            data.save().then(function(){
                Author.findOne({_id:newAuthor._id}).then(function(data){
                    assert(data.books.length === 2);
                    done();
                });
            });
        });
    });
});//end describe





