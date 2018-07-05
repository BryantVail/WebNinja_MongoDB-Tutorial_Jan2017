//delete_test.js
/*
    create & save a new record
    remove new record
    findOne() on new record
    assert that the new record is null
*/
const assert    = require("assert");
const User      = require("../Models/User");
//const app       = require("../config/connection");
const mongoose  = require("mongoose");

let newUser;

beforeEach(function(done){

    newUser = new User({
        username        :"TestUser",
        email           :"testEmail@email.com",
        stateOfResidence:"FL"
    });

    newUser.save().then(function(){
        done();
    });
});//end beforeEach "mocha hook"

describe("Deleting Records suite", function(){

    //test 'instance'.remove()
    it("remove 1 record, 'newUser.remove()'", function(done){
        
        newUser.remove().then(function(){
            User.findOne({id_ : newUser._id}).then(function(data){
                assert(data === null);
                done();
            });//end User.findOne
        });
    });//end it("remove 1 record, 'newUser.remove()'",

    //test 'Model'.remove({})
    it("remove 1 record using Model level function", function(done){
        User.remove({_id: newUser._id}).then(function(data){
            User.findOne({_id : data._id}).then(function(data){
                assert(data === null);
                done();
            });
        });



    });//end it("remove 1 record using Model level function",
});














