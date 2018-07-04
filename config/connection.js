const mongoose      = require("mongoose");

module.exports = (function(){
    mongoose.connect("mongodb://localhost:27017/shirtOrderLocal");
    //if directory used does not exist, the directory will be created to be used

    mongoose.connection.once("open", function(){
        //.once == eventListener
        console.log("Connection mongodb, 'mongoose.connection'");
    }).on("error", function(error){
        console.log(`Connection error: ${error.message}`);
    });
})();
