const mongoose = require('mongoose');
const config = require('../config/database');

var User = require('./user');


const excerciseSchema = mongoose.Schema ({
    name: {type: String},
    sets: {type: Number, required:true },
    rest: {type: Number, required:true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    workout: {type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true},
    date : { type : Date, default: Date.now }
  });

const Exercise = module.exports = mongoose.model('Exercise', excerciseSchema);


