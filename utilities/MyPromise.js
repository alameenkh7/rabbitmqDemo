const Promise = require("bluebird");

class MyPromise {

  static errorMessage(e) {
    console.error(e.stack);
  }

  static successMessage(data) {
    console.log("the return from promise is", data);
  }

  static delay(t) {
    return new Promise(function(resolve) {
      setTimeout(resolve, t)
    });
  }
}

module.exports = MyPromise;
