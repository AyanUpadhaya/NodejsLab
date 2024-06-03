## Basic HTTP Programme MVC 

### Folder structure

- controllers
- views
- utils
- index.js
- routes.js

**utils/serveHtml.js**

~~~
const fs = require('fs');
const path = require('path');

const serveHtml = (res, filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
};

module.exports = serveHtml;

~~~

**Serve HTML**
**controllers/homeController.js**

~~~
const path = require('path');
const serveHtml = require('../utils/serveHtml');

const homeController = (req, res) => {
  const filePath = path.join(__dirname, '../views/index.html');
  serveHtml(res, filePath);
};

module.exports = homeController;
~~~

**Render Ejs template**
**controllers/homeController.js**

~~~
const renderTemplate = require('../utils/renderTemplate');

const homeController = (req, res) => {
  renderTemplate(res, 'index', { title: 'Home Page', message: 'Welcome to the Home Page!' });
};

module.exports = homeController;

~~~

**Ejs template**
**views/index.ejs**

~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>


~~~


**utils/renderTemplate.js**

~~~
const ejs = require('ejs');
const path = require('path');

const renderTemplate = (res, templateName, data = {}) => {
  const filePath = path.join(__dirname, '../views', `${templateName}.ejs`);
  ejs.renderFile(filePath, data, (err, str) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(str);
  });
};

module.exports = renderTemplate;

~~~




**routes.js**
~~~
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const errorController = require('./controllers/errorController');

const routes = (req, res) => {
  const currentUrl = req.url;

  switch (currentUrl) {
    case '/':
      homeController(req, res);
      break;
    case '/about':
      aboutController(req, res);
      break;
    default:
      errorController(req, res);
      break;
  }
};

module.exports = routes;
~~~



**server.js**
~~~
const http = require("http");
const routes = require("./routes");
const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

~~~
