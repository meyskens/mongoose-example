const mongoose = require("mongoose")
mongoose.set("debug", false)
mongoose.createConnection("mongodb://127.0.0.1/test")

module.exports = mongoose