//updateDB_test.js
"use strict";

const assert        = require("assert");
const User          = require("../Models/User");



//Update DB test Suite
describe("Update DB Records Test Suite",function(){

    let newUser;
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

    // 'instance'.update()
    it("'instance'.update()",function(done){

        newUser.update({_id: newUser._id}, {creditRating : 2}).then(function(){
            User.findOne({_id: newUser._id}).then(function(data){
                assert(data.creditRating === 2);
                
                done();
            }).catch(function(err){
                console.log(err);
                console.log(data);
            });
        });
    });
    
    // 'Model'.update()
    it("'Model'.update()",function(done){
        User.update({email : newUser.email}, {username: "BryantV"}, function(){
            User.findOne({email : newUser.email}).then(function(data){
                assert(data.username === "BryantV");
                done();
            }).catch(function(err){
                console.log(err);
            });
        });
    });
    
    // 'Model'.findOneAndUpdate
    it("'Model'.findOneAndUpdate", function(done){
        User.findOneAndUpdate({email : newUser.email}, {username: "BryantV"}, {}).
            then(function(){
                User.findOne({_id : newUser._id}).then(function(data){
                    assert(data.username == "BryantV");
                    done();
                });
            }).catch(function(err){
                console.log(err);
            });

    });
    
});



















