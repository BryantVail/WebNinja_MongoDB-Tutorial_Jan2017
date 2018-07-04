//MongoDB_test.js
const mocha         = require("mocha");
const assert        = require("assert");
const User          = require("../Models/User");


//describe tests
describe("saving to DBase", function(){
    //create tests
    it("saves a record to DB", function(done){
        //create new User
        var newUser = new User({
            //username      : notRequired, uses email if nothing entered
            email           :"test@gmail.com",
            //userState     : default
            dateInit        :"07/04/2018",
            stateOfResidence:"Florida"
        });
        //save new User instance
        newUser.save().then(function(){
            assert(newUser.isNew === false);
            done();
        });
    });//end it("saves a record to DB", function(){...
});














