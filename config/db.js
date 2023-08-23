const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(`mongodb+srv://yashagarwal:${process.env.SECRET_KEY}@cluster0.ltau6hy.mongodb.net/`, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => console.log("Connection succesfull")).catch((error) => console.log(error));
};

module.exports = connectDB;