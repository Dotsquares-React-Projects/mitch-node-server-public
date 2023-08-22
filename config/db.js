const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/mitchapp", {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => console.log("Connection succesfull")).catch((error) => console.log(error));
};

module.exports = connectDB;