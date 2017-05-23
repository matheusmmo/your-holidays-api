const CalendarConfiguration = require('../models/CalendarConfiguration');

class CalendarConfigurationController {
  GetConfig(request, response) {
    
    CalendarConfiguration.find({}, (err, configs) => {
      if (err) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
        return;
      }

      response.json({
        status: true,
        config: configs
      });
    });
  };

  PostConfig(request, response) {
    const config = new CalendarConfiguration(request.body);

    config.save((error, config) => {
      if (error) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
      }

      response.json({
        status: true,
        message: "Configuration Saved!!"
      });
    });
  };

  UpdateConfig(request, response) {
    CalendarConfiguration.findById(request.params.id, (error, config) => {
      config.key = request.body.key;
      config.value = request.body.value;
      
      config.save((error, config) => {
        if (error) {
          response.json({
            status: false,
            error: "Configuration not updated"
          });
        }

        response.json({
          status: true,
          message: "Configuration updated successfully"
        });
      });
    });
  };

  DeleteConfig(request, response) {
    CalendarConfiguration.remove({
      _id: request.params.id
    }, (err, configs) => {
      if (err) {
        response.json({
          status: false,
          error: "Deleting calendar is not successfull"
        });
      }

      const content = {
        status: true,
        message: "Configuration deleted successfully!"
      };

      response.json(content);
    });
  };
};

module.exports = new CalendarConfigurationController;