const http = require("http");
const { parse } = require("path/posix");

const routes = require("./routes");

const server = http.createServer(routes);
server.listen(3000);
