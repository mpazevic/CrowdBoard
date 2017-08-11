//require path to ensure that there are no routing errors
const path = require("path");

module.exports.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../src", "index.html"));
}
