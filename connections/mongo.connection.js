const db = require("../db/index");
var debug = require("debug")("back-app:db");
const chalk = require("chalk");

async function connectMongo() {
    try {
        await db.mongoose.connect(db.url);
        debug(`MongoDB status: Connected ${chalk.green("✓")}`);
    } catch (error) {
        debug("connection error:", error);
        setTimeout(connectMongo, 5000);
    }
}

module.exports = connectMongo