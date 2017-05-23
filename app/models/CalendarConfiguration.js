const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarConfigurationSchema = Schema({
  calendar: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  key: {
    type: String,
  },
  value: {
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

module.exports = mongoose.model('CalendarConfiguration', CalendarConfigurationSchema);