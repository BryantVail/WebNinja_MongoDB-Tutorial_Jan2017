//MongoDB_test.js
const mocha         = require("mocha");
const assert        = require("assert");
const User          = require("../Models/User");


//describe tests
describe("saving to DBase", function(){
    //create tests
    it("saves a record to DB", function(done){
        //create new User
        //this.timeout(15000);
        var newUser = new User({
            username      : "BryantV"
            // email           :"test@gmail.com",
            // userState       : "New",
            // //dateInit        :"07/04/2018",
            // stateOfResidence:"Florida"
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














