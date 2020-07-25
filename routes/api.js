const app = require("express");
const db = require("../models");

//Post new workout
app.post("/api/workouts", (req,res) => {
    db.Workout.create({})
     .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

//Get workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => { 
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });