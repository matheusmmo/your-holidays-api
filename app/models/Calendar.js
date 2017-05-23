const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = Schema({
  name: {
    type: String,
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

module.exports = mongoose.model('Calendar', CalendarSchema);