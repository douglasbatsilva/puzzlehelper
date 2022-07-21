const registerServices = require("./services");
const registerDatabase = require("./database");
const registerDiscord = require("./discordBot");
const registerDependencies = require("./dependencies");

module.exports = {
  registerDependencies,
  registerDatabase,
  registerServices,
  registerDiscord,
};
