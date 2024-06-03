const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const errorController = require("./controllers/errorController");

const routes = (req,res)=>{
    const currentUrl = req.url;
    switch (currentUrl) {
      case "/":
        homeController(req, res);
        break;
      case "/about":
        aboutController(req, res);
        break;
      default:
        errorController(req, res);
        break;
    }

}

module.exports = routes;
