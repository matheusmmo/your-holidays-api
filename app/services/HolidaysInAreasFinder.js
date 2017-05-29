const InvalidArgumentsException = require('../common/exceptions/InvalidArgumentsException');

class HolidaysInAreasFinder {
  constructor(areas, holidays) {
    if (!areas || !holidays) {
      throw new InvalidArgumentsException('You must pass an array of areas and holidays.');
    }

    this.areas = areas;
    this.holidays = holidays;
  }

  find() {
    return this.areas.map((area) => {
      return this.holidays.filter((holiday) => area.equals(holiday.area))
    });
  };
}

module.exports = HolidaysInAreasFinder;