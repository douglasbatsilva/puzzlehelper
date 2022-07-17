require("dotenv").config();
const ManageDB = require("../infra/mongo");
const Message = require("./controller");
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

class Server {
  constructor() {
    this.client = new Client(botFlags);
    this.start();
  }

  async start() {
    await ManageDB.connect(process.env.DB_NAME);
    new Message(this.client);
    this.client.once("ready", () => console.log("Online!"));
    this.client.login(process.env.BOT_TOKEN);
  }
}

module.exports = new Server();
