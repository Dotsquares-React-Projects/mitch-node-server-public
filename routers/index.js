const express = require("express");
const router = express.Router();
const {getDeviceData, postDeviceData} = require("../controllers/deviceDataController");

router.get("/", getDeviceData);

router.post("/", postDeviceData);

module.exports = router;