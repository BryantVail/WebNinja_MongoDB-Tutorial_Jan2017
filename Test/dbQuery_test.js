//dbQuery_test.js
const assert        = require("assert");
const User          = require("../Models/User");
const app           = require("../config/connection");

describe("finding Users",function(){

    //mocha hooks
    beforeEach(function(done){
        let newUser = new User({
            username            :"TestUser",
            email               :"TestEmail@gmail.com",
            stateOfResidence    :"FL"
        });

        newUser.save().then(function(){
            assert(newUser.isNew === false);
            done();
        });
    });

    //'it' statement
    it("finds all users", function(done){
        //find users
        User.find({}).then(function(data){
            assert(data.length == 1);
            done();
        });

    });//end it("finds all users")

    it("Finds 1(One) records from the database",function(done){
        //find 1 users
        User.findOne({username:"TestUser"}).then(function(data){
            assert(data.username === "TestUser");
            done();
        });
    });


});//end describe













