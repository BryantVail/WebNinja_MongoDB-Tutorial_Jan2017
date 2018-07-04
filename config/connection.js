const mongoose      = require("mongoose");

module.exports = (function(){

    //ES6 Promises
    mongoose.Promise = global.Promise;//overwrite mongoose Promise lib

    //Connect to db before test is run
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/shirtOrderLocal_test");
        //if directory used does not exist, the directory will be created to be used
        mongoose.connection.once("open", function(){
            //.once == eventListener
            console.log("Connection mongodb, 'mongoose.connection'");
            done();
        }).on("error", function(error){
            console.log(`Connection error: ${error.message}`);
        });
    });


    //Drop Characters Collection before each test
    beforeEach(function(done){
        //Drop Collection
        mongoose.connection.collections.users.drop(function(){
            done();
        });



    });
})();
