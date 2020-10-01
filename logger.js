const EventEmitter = require("events");

class Logger extends EventEmitter {
  log() {
    this.emit("messageLogged", "message has been logged");
  }
}

module.exports = Logger;
