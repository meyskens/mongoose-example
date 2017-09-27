const mongoose = require("mongoose")
mongoose.set("debug", false) // Having trouble? This option can help you!
module.exports =mongoose.createConnection("mongodb://127.0.0.1/test") // Pass connection onwards