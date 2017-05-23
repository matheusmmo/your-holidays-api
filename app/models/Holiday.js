const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HolidaySchema = Schema({
  calendar: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  area: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
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

module.exports = mongoose.model('Holiday', HolidaySchema);