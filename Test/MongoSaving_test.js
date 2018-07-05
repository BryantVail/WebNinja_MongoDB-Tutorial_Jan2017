//MongoDB_test.js
const mocha         = require("mocha");         //not required/needed
const assert        = require("assert");
const User          = require("../Models/User");
const app           = require("../app.js");     //runs as an iffe when "required".

//describe tests
describe("saving to DBase", function(){
    //create tests
    it("save a record to DB", function(done){
        //create new User
        //this.timeout(15000);
        var newUser = new User({
            username      : "BryantV",
            email           :"testEmail@email.com",
            userState       : "New",
            dateInit        :"07/04/2018",
            stateOfResidence:"Florida"
        }, function(err){
            if(err){
                console.log(err.message);
            }
        });
        //save new User instance
        newUser.save().then(function(){
            assert(newUser.isNew === false);
            done();
        }).catch(function(err){
            console.log(err.message);
            done(err);
        });
    });//end it("saves a record to DB", function(){...
});














