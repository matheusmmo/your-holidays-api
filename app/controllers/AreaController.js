const Area = require('../models/Area');

class AreaController {
  GetArea(request, response) {
    
    Area.find({}, (err, areas) => {
      if (err) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
        return;
      }

      response.json({
        status: true,
        area: areas
      });
    });
  };

  PostArea(request, response) {
    const area = new Area(request.body);

    area.save((error, area) => {
      if (error) {
        response.json({
          status: false,
          error: "Something went wrong"
        });
      }

      response.json({
        status: true,
        message: "Area Saved!!"
      });
    });
  };

  UpdateArea(request, response) {
    Area.findById(request.params.id, (error, area) => {
      area.name = request.body.name;
      
      area.save((error, area) => {
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

  DeleteArea(request, response) {
    Area.remove({
      _id: request.params.id
    }, (err, areas) => {
      if (err) {
        response.json({
          status: false,
          error: "Deleting area is not successfull"
        });
      }

      const content = {
        status: true,
        message: "Area deleted successfully!!"
      };

      response.json(content);
    });
  };
};

module.exports = new AreaController;