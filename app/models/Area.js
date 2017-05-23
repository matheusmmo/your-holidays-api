const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = Schema({
  name: {
    type: String,
  },
  center: {
    lat: {
      type: Number,
      required: true,
    }, 
    lng: {
      type: Number,
      required: true,
    },
  },
  points: {
    type: Array,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Area', AreaSchema);