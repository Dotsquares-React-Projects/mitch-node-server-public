const mongoose = require("mongoose");

const DeviceDataSchema = new mongoose.Schema({
    lat : {
        type : String,
        required : true
    },

    lng : {
        type : String,
        required : true
    },

    deviceName : {
        type : String
    },

    deviceIp : {
        type : String
    },

    date : {
        type : Date,
        default : Date.now
    }
},  {timestamps : true});

module.exports = new mongoose.model("mitch", DeviceDataSchema);