const AreaFinder = require('../services/AreaFinder');
const HolidayFinder = require('../services/HolidayFinder');
const HolidaysInAreasFinder = require('../services/HolidaysInAreasFinder');

class TodayController {
  index(request, response) {
    const today = new Date();

    try {
      /**
       * Setting up area finder.
       */
      const areaFinder = new AreaFinder();
      areaFinder.latitude = request.query.latitude;
      areaFinder.longitude = request.query.longitude;
      areaFinder.name = request.query.description;

      /**
       * Setting up today's holiday finder.
       */
      const holidayFinder = new HolidayFinder();
      holidayFinder.day = today.getDate();
      holidayFinder.month = today.getMonth() + 1;
      holidayFinder.year = today.getFullYear();
      holidayFinder.active = request.query.active;

      Promise.all([areaFinder.find(), holidayFinder.find()])
        .then((values) => {
          const holidaysInArea = new HolidaysInAreasFinder(values[0], values[1]);

          return response.json({
            code: 200,
            message: null,
            data: holidaysInArea.find(),
          });
        })
      ;
    } catch (e) {
      console.log('Error');
      console.log(e);

      return response.json({
        code: e.code,
        message: e.message,
      });
    }
  }
};

module.exports = new TodayController;