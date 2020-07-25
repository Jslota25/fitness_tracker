// Require mongoose
const mongoose = require("mongoose");

// Establish schema
const Schema = mongoose.Schema;

// Creates workout schema
const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
          },
          name: {
            type: String,
            trim: true,
            required: "Enter the exercise name"
          },
          duration: {
            type: Number,
            required: "Enter the length of the exercise"
          },
          weight: {
            type: Number,
            required: "Enter the weight used"
          },
          reps: {
            type: Number,
            required: "Enter the amount of reps"
          },
          sets: {
            type: Number,
            required: "Enter the amount of sets"
          },
          distance: {
            type: Number,
            required: "What distance did you cover?"
        }
      }
    ]
});

// Schema to be exported throughout the application
const Workout = mongoose.model("Workout", workoutSchema);

// Export model
module.exports = Workout;