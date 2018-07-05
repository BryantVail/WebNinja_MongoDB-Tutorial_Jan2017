//User.js

const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const UserSchema          = new Schema({
    username:{
        type        : String,
        required    : true
    },
    email:{
        type        : String,
        required    : true
    },
    userState:{//new, active, inactive
        type        : String,
        required    : true,
        default     : "New"
    },
    dateInit:{
        type        : Date,
        required    : true,
        default     : Date.now
    },
    stateOfResidence:{
        type        : String,
        required    : true
    },
    creditRating:{
        type            : Number,
        required        : true,
        default         : 1
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;