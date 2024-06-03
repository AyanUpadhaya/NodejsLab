
const renderTemplate = require("../utils/renderTemplate");
function errorController(req, res) {

  renderTemplate(res, "404", 404, {
    title: "404",
    message: "PAGE NOT FOUND",
  });
}

module.exports = errorController;
