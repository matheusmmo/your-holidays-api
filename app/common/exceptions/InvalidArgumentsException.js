const Exception = require('./Exception');

class InvalidArgumentsException extends Exception {
  constructor(message) {
    super(message, 400);
  };
};

module.exports = InvalidArgumentsException;