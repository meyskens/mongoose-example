const mongoose = require("mongoose")
mongoose.set("debug", false)
mongoose.connect("mongodb://127.0.0.1/test")

module.exports = mongoose