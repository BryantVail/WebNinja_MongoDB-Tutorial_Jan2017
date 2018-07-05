//nestingObjects_test.js

const assert        = require("assert");
const mongoose      = require("mongoose");
const Author        = require("../Models/Author");


describe("nested Objects, Author>Books", function(){


    let newAuthor;
    it("create nested record & access books within an Author", function(done){
        newAuthor = new Author({
            name:"Roger",
            age: 35,
            books:[
                {title:"get There", pageCount:300, yearPublished:1990}
            ]
        });

        newAuthor.save().then(function(){
            Author.findOne({name: "Roger"}).then(function(data){
                assert(data.books.length === 1);
                done();
            });
        }).catch(function(err){
            console.log(err);
        });
    });


    //test 1
    
})





