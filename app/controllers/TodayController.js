const AreaFinder = require('../services/AreaFinder');

class TodayController {
  index(request, response) {
    const latitude = request.query.latitude;
    const longitude = request.query.longitude;
    const name = request.query.description;

    try {
      const areaFinder = new AreaFinder();
      areaFinder.latitude = latitude;
      areaFinder.longitude = longitude;
      areaFinder.name = name;

      areaFinder.find().then((areas) => {
        return response.json({
          code: 200,
          message: null,
          data: areas,
        });
      });
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