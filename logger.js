const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // CALL EVENT
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

// const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called message listener", data));

logger.log("Hello");
