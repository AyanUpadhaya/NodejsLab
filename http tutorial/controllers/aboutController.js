const fs = require("fs");
const path = require("path");
const serveHtml = require("../utils/serveHtml");
const renderTemplate = require("../utils/renderTemplate");
function aboutController(req, res) {
  
  // let filePath = path.join(__dirname, "../views/about.html");
  // Read the file from the filesystem
  //  serveHtml(res, filePath, 200);
   renderTemplate(res, "about", 200, {
     title: "about",
     message: "I am about page",
   });
}

module.exports = aboutController;
