const ejs = require('ejs')
const path = require('path')

const renderTemplate = (res, templateName, statusCode,data = {}) => {
  let filePath = path.join(__dirname, `../views/${templateName}.ejs`);
  ejs.renderFile(filePath, data, (err, str) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal Server Error");
      return;
    }

    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/html");
    res.end(str);
  });
};

module.exports = renderTemplate;