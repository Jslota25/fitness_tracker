const express = require("express");
const db = require("../models");
const app = express();

//Post new workout
app.post("/api/workouts", (req,res) => {
    db.Workout.create({})
     .then((Workout) => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

//Get workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((Workout) => { 
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      });
    });

//Update existing workout
app.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        {_id: req.params.id}, 
        {$push: {exercises: body}}, 
        {new: true})
      .then((Workout) => {
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      })
    });

// Get previous workouts
app.get("/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

//Export routes 
module.exports = app;