const mongoose = require("mongoose");

const db = {}
db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1:27017/TeatSnackBot"
db.user = require("./Models/User.Model")(mongoose)

module.exports = db;