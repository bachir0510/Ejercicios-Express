const app = require("./app");

async function server() {
  await app.listen(app.get("Port"));
  console.log("Server on Port", app.get("Port"));
}

server();
