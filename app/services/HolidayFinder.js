const InvalidArgumentsException = require('../common/exceptions/InvalidArgumentsException');
const Holiday = require('../models/Holiday');

class HolidayFinder {
  constructor() {
    this.day = null;
    this.month = null;
    this.year = null;
    this.active = null;
  }

  find() {
    const params = {
      day: this.day,
      month: this.month,
      year: this.year,
    };

    if (this.active) {
      Object.assign(params, { active: this.active });
    }

    return Holiday.find(params);
  };
}

module.exports = HolidayFinder;