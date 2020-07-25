const path = require("path");

module.exports = function (app) {

//Homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Exercises
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Stats
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
}