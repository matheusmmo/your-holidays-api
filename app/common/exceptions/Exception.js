class Exception {
  constructor(message, code) {
    code = code || 500;

    this.message = message;
    this.code = code;
  };
};

module.exports = Exception;