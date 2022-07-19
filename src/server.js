require("dotenv").config();
const ManageDB = require("../infra/mongo");
const Message = require("./controller");
const { Client, GatewayIntentBits } = require("discord.js");
const botFlags = {
  allowedMentions: {
    parse: ["users", "roles", "everyone"],
    repliedUser: true,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
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
