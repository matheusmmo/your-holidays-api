const Calendar = require('../models/Calendar');

class CalendarController {
  GetCalendar(request, response) {
    
    Calendar.find({}, (err, calendars) => {
      if (err) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
        return;
      }

      response.json({
        status: true,
        calendar: calendars
      });
    });
  };

  PostCalendar(request, response) {
    const calendar = new Calendar(request.body);

    calendar.save((error, calendar) => {
      if (error) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
      }

      response.json({
        status: true,
        message: "Calendar Saved!!"
      });
    });
  };

  UpdateCalendar(request, response) {
    Calendar.findById(request.params.id, (error, calendar) => {
      calendar.name = request.body.name;
      
      calendar.save((error, calendar) => {
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

  DeleteCalendar(request, response) {
    Calendar.remove({
      _id: request.params.id
    }, (err, calendars) => {
      if (err) {
        response.json({
          status: false,
          error: "Deleting calendar is not successfull"
        });
      }

      const content = {
        status: true,
        message: "Calendar deleted successfully!!"
      };

      response.json(content);
    });
  };
};

module.exports = new CalendarController;