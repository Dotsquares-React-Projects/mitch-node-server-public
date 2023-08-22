const DeviceDataSchema = require("../models/deviseDataSchema");

const getDeviceData = async(req, res) => {
    try{
        const device = await DeviceDataSchema.find();

        res.status(200).json({device : device});
    }catch(error){
        res.status(404).json({msg : "Not Found"});
    }
};

const postDeviceData = async(req, res) => {
    const {lat, lng, deviceName, deviceIp} = req.body;
    if(!lat || !lng){
        return res.status(400).json({msg : "Please fill the details properly"});
    }
    try{
        let device = new DeviceDataSchema({
            lat : lat,
            lng : lng,
            deviceName : deviceName,
            deviceIp : deviceIp
        });

        await device.save();

        res.status(200).json({device : device, isSuccess : true});
    }catch(error){
        res.status(404).json({msg : "Not Found"});
    }
};

module.exports = {getDeviceData, postDeviceData};