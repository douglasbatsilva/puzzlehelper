require("dotenv").config();
const { createContainer } = require("awilix");
const loadContainer = require("./container");

class Server {
  constructor() {
    this.container = createContainer();
    this.start();
  }

  async start() {
    loadContainer(this.container);
  }
}

module.exports = new Server();
