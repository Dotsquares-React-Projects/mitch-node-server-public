const express = require("express");
const router = express.Router();
const {getDeviceData, postDeviceData, deleteDeviceData} = require("../controllers/deviceDataController");

router.get("/", getDeviceData);

router.post("/", postDeviceData);

router.delete("/", deleteDeviceData);

module.exports = router;