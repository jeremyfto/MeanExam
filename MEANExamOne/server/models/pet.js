const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, "Pet name is required"],
    unique: [true, "Pet name must be unique"]
  },
  type: {
    type: String,
    required: [true, "Pet name is type"],
    minlength: [3, "Pet type must be at least 3 characters"]
  },
  description: {
    type: String,
    required: [true, "Pet name is description"],
    minlength: [3, "Pet description must be at least 3 characters"]
  },
  likes: {
    type: Number,
    default: 0
  },
  skills: {
    skill1: {
      type: String
    },
    skill2: {
      type: String
    },
    skill3: {
      type: String
    },
    _id: {}
  }
}, {timestamps: true})
// setter

mongoose.model('Pet', PetSchema);