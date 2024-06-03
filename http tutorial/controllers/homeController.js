const renderTemplate = require("../utils/renderTemplate");

function homeController(req,res){
 
  renderTemplate(res, "index", 200, {'title':'Home','message':'I am simple home page'});
}

module.exports = homeController;

