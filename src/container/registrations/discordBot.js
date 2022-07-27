require("dotenv").config();
const { asValue, Lifetime } = require("awilix");
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

const SINGLETON = { lifetime: Lifetime.SINGLETON };

const registerDiscord = (container) => {
  const discordBot = new Client(botFlags);

  discordBot.on("ready", () => {
    discordBot.user.setPresence({
      activities: [{ name: "Puzzle Community" }],
      status: "dnd",
    });

    console.log("PuzzleHelper On!");
  });

  discordBot.on("messageCreate", async (message) => {
    const messageService = container.resolve("messageService");
    await messageService.handleMessage(message);
  });

  discordBot.login(process.env.BOT_TOKEN);

  container.register({
    discordBot: asValue(discordBot, SINGLETON),
  });
};

module.exports = registerDiscord;
