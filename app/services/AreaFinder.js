const InvalidArgumentsException = require('../common/exceptions/InvalidArgumentsException');
const Area = require('../models/Area');

class AreaFinder {
  constructor() {
    this.latitude = null;
    this.longitude = null;
    this.name = null;
  }

  findByLatitudeAndLongitude() {
    const params = {
      points: {
        $elemMatch: {
          lat: Number(this.latitude),
          lng: Number(this.longitude),
        }
      }
    }

    return Area.find(params);
  };

  findByDescription() {
    const params = {
      name: this.name,
    }

    return Area.find(params);
  };

  find() {
    if (this.latitude && this.longitude) {
      return this.findByLatitudeAndLongitude();
    }

    if (!this.name) {
      throw new InvalidArgumentsException('You should provide Latitude and Longitude or a name.');
    }

    return this.findByDescription();
  };
}

module.exports = AreaFinder;