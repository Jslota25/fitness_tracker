const db = require("../models");
const app = require("express");
module.exports = function (app) {

//Create workout
app.post("/api/workouts", (req,res) => {
  db.Workout.create({})
   .then((Workout) => {
    res.json(Workout);
  })
  .catch(err => {
    res.json(err);
  });
});

//Get all workouts
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((Workout) => { 
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

//Update a workout
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

//Get previous workouts
app.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((Workout) => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};