const fs = require("fs");
const path = require("path");

const serveHtml = (res, filePath, statusCode) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal Server Error");
      return;
    }

    res.statusCode = statusCode;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
};

module.exports = serveHtml;
