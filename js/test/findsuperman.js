const _ = require("underscore");

module.exports = values => {
  let foundSuperman = false;

  _.each(values, names => {
    _.find(names, name => {
      if (name === "Clark Kent") {
        console.log("It's Superman!");
        foundSuperman = true;
      } else {
        console.log("... No Superman!");
      }
    });
  });

  return foundSuperman;
};
