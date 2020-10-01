const fs = require("fs");
const os = require("os");

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", function (message) {
  console.log(message);
});

logger.log();
console.log(os.freemem());

const files = fs.readdirSync("./");

