const http = require("http");
const fs = require("fs");
const path = require("path");
const routes = require("./routes");
const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
