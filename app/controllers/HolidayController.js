const Holiday = require('../models/Holiday');

class HolidayController {
  GetHoliday(request, response) {
    
    Holiday.find({}, (err, holidays) => {
      if (err) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
        return;
      }

      response.json({
        status: true,
        holiday: holidays
      });
    });
  };

  PostHoliday(request, response) {
    const holiday = new Holiday(request.body);

    holiday.save((error, holiday) => {
      if (error) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
      }

      response.json({
        status: true,
        message: "Holiday Saved!!"
      });
    });
  };

  UpdateHoliday(request, response) {
    Holiday.findById(request.params.id, (error, holiday) => {
      holiday.name = request.body.name;
      
      holiday.save((error, holiday) => {
        if (error) {
          response.json({
            status: false,
            error: "Status not updated"
          });
        }

        response.json({
          status: true,
          message: "Status updated successfully"
        });
      });
    });
  };

  DeleteHoliday(request, response) {
    Holiday.remove({
      _id: request.params.id
    }, (err, holidays) => {
      if (err) {
        response.json({
          status: false,
          error: "Deleting holiday is not successfull"
        });
      }

      const content = {
        status: true,
        message: "Holiday deleted successfully!!"
      };

      response.json(content);
    });
  };
};

module.exports = new HolidayController;