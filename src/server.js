require("dotenv").config();
const ManageDB = require("../infra/mongo");
const { Client } = require("discord.js");
const botFlags = {
  allowedMentions: {
    parse: ["users", "roles", "everyone"],
    repliedUser: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
  ],
};
const http = require("http");

class Server {
  constructor() {
    this.client = new Client(botFlags);
    this.start();
  }

  async start() {
    await ManageDB.connect(process.env.DB_NAME);
    require("./controller")(this.client);
    http.createServer().listen(8080);
    this.client.once("ready", () => console.log("Online!"));
    this.client.login(process.env.BOT_TOKEN);
  }
}

module.exports = new Server();
