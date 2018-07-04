//PrintedShirt.js
const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

//Create Schema & Model
const PrintedItemSchema = new Schema({
    name:{//design || shirt name
        type        :String,
        required    :true
    },
    type:{//shirt,shorts
        type        : String,
        required    : true,
        default     : "shirt",
        
    },
    subType:{//polo, tee
        type        : String,
        required    : true
    },
    material:{
        type        : String,
        required    : true,
        default     : "cotton 100%"
    },
    brand:{//Nike, Columbia
        type        : String,
        required    : false
    },

    
    dateInit:{
        type        :date,
        default     :Date.now,
        required    : true
    },
    dateDue:{
        type        :date,
        required    : true,
        isTentative : boolean
    },
    colorCount:{
        type            : Number,
        useColorsInImage: boolean
    },
    // colors:{},               //color names, or hex colors picked out from image
    // graphics:[type: Design], //type "Graphic" defined locally, {url,custom(bool),colors in image?}, need to solidify this object model
    // graphicLocations:[type: GraphicLocation],
    printImageUrl:{
        type        : String,
        required    : false, 
    },
    printDescription:{
        type        : String,
        required    : true,
    },
});

const PrintedItem = mongoose.model("PrintedItem",PrintedItemSchema);

module.exports = PrintedItem;

// let myChar = new PrintedShirt({
//     //properties
// });


















