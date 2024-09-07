const http = require("http");

const PORT = process.env.PORT || 7000;

const server = http.createServer();

server.listen(PORT);
