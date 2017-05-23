const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');

const Calendar = require('../../app/models/Calendar');

describe("Get all calendars", function () {
    // Test will pass if we get all calendars
    it("should return all calendars", function (done) {
        var mock = sinon.mock(Calendar);
        var expectedResult = {
            status: true,
            calendar: []
        };
        mock.expects('find').yields(null, expectedResult);
        Calendar.find(function (err, result) {
            mock.verify();
            mock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a calendar
    it("should return error", function (done) {
        var mock = sinon.mock(Calendar);
        var expectedResult = {
            status: false,
            error: "Something went wrong"
        };
        mock.expects('find').yields(expectedResult, null);
        Calendar.find(function (err, result) {
            mock.verify();
            mock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

// Test will pass if the calendar is saved
describe("Post a new calendar", function () {
    it("should create new post", function (done) {
        var mock = sinon.mock(new Calendar({
            name: 'Save new calendar from mock'
        }));
        var calendar = mock.object;
        var expectedResult = {
            status: true
        };
        mock.expects('save').yields(null, expectedResult);
        calendar.save(function (err, result) {
            mock.verify();
            mock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if the calendar is not saved
    it("should return error, if post not saved", function (done) {
        var mock = sinon.mock(new Calendar({
            name: 'Save new calendar from mock'
        }));
        var calendar = mock.object;
        var expectedResult = {
            status: false
        };
        mock.expects('save').yields(expectedResult, null);
        calendar.save(function (err, result) {
            mock.verify();
            mock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

describe("Update a new calendar by id", function () {
    it("should updated a calendar by id", function (done) {
        var mock = sinon.mock(new Calendar({
            name: 'My Calendar',
            _id: 12345
        }));
        var calendar = mock.object;
        var expectedResult = {
            status: true
        };
        mock.expects('save').withArgs(calendar._id).yields(null, expectedResult);
        calendar.save(calendar._id, function (err, result) {
            mock.verify();
            mock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    it("should return error if update action is failed", function (done) {
        var mock = sinon.mock(new Calendar({
            name: 'My calendar',
            _id: 12345
        }));
        var calendar = mock.object;
        var expectedResult = {
            status: false
        };
        mock.expects('save').withArgs(calendar._id).yields(expectedResult, null);
        calendar.save(calendar._id, function (err, result) {
            mock.verify();
            mock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

// Test will pass if the calendar is deleted based on an ID
describe("Delete a calendar by id", function () {
    it("should delete a calendar by id", function (done) {
        var mock = sinon.mock(Calendar);
        var expectedResult = {
            status: true
        };
        mock.expects('remove').withArgs({
            _id: 12345
        }).yields(null, expectedResult);
        Calendar.remove({
            _id: 12345
        }, function (err, result) {
            mock.verify();
            mock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the calendar is not deleted based on an ID
    it("should return error if delete action is failed", function (done) {
        var mock = sinon.mock(Calendar);
        var expectedResult = {
            status: false
        };
        mock.expects('remove').withArgs({
            _id: 12345
        }).yields(expectedResult, null);
        Calendar.remove({
            _id: 12345
        }, function (err, result) {
            mock.verify();
            mock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});