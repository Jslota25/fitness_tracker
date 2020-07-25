const express = require("express");
const path = require("path");
const app = express();

//Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
//Exercise.html
app.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Stats.html
app.get("/stats", (req, res) => {
res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//Export routes
module.exports = app;

