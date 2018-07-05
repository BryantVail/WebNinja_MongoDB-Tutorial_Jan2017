//updateDB_test.js
"use strict";

const assert        = require("assert");
const User          = require("../Models/User");

//beforeEach(), mocha hook
//create user
beforeEach(function(done){
    newUser = new User({
        username        : "TestUser",
        email           : "testEmail@email.com",
        stateOfResidence: "FL"
    });

    newUser.save().then(function(){
        done();
    });
});

//Update DB test Suite
describe("Update DB Records Test Suite",function(){
    // 'instance'.update()
    it("'instance'.update()",function(done){

        newUser.update({email: "BryantV@gmail.com"}).then(function(){
            User.findOne({email: "BryantV@gmail.com"}).then(function(data){
                assert(data.email === "BryantV@gmail.com");
                done();
            });
        });
    });
    
    // 'Model'.update()
    it("'Model'.update()",function(done){

    });
    
    // 'Model'.findOneAndUpdate
    it("'Model'.findOneAndUpdate", function(done){
        User.findOneAndUpdate({email : "testEmail@gmail.com"})

    })
    
})



















