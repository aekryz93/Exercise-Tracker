var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration:{
    type: Number,
    required: true,
  },
  date: Date,
})

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;