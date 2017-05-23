const express = require('express');
const router = express.Router();

// Calendar
const CalendarController = require('../controllers/CalendarController');

router.get('/calendar', CalendarController.GetCalendar);
router.post('/calendar', CalendarController.PostCalendar);
router.delete('/calendar/:id', CalendarController.DeleteCalendar);
router.put('/calendar/:id', CalendarController.UpdateCalendar);

// Calendar Configuration
const CalendarConfigurationController = require('../controllers/CalendarConfigurationController');

router.get('/calendar/config', CalendarConfigurationController.GetConfig);
router.post('/calendar/config', CalendarConfigurationController.PostConfig);
router.delete('/calendar/config/:id', CalendarConfigurationController.DeleteConfig);
router.put('/calendar/config/:id', CalendarConfigurationController.UpdateConfig);

// Area
const AreaController = require('../controllers/AreaController');

router.get('/area', AreaController.GetArea);
router.post('/area', AreaController.PostArea);
router.delete('/area/:id', AreaController.DeleteArea);
router.put('/area/:id', AreaController.UpdateArea);


// Holiday
const HolidayController = require('../controllers/HolidayController');

router.get('/holiday', HolidayController.GetHoliday);
router.post('/holiday', HolidayController.PostHoliday);
router.delete('/holiday/:id', HolidayController.DeleteHoliday);
router.put('/holiday/:id', HolidayController.UpdateHoliday);

module.exports = router;