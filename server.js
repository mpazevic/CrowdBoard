// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
const viewRouter = require("./routes/viewRoutes.js");
// const apiRouter = require("./routes/apiRoutes.js");

// Create Instance of Express
const app = express();
// Sets an initial port for later use in listener
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./src"));

//-------------------------------------------------

app.use("/", viewRouter);

//-------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
