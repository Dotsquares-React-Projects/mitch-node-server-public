const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = 8000;

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is from home side");
});

app.use("/device-data", require("./routers/index"));

app.listen(PORT, () => console.log("This is listening port", PORT));