const prefix = ".ph";
const resourceService = require("./services/resources.service");
const embedService = require("./services/embed.service");

class Message {
  constructor(bot) {
    this.watch(bot);
  }

  watch(bot) {
    bot.on("messageCreate", async (message) => {
      // if (!message.channelId === "998625559007477781") return;
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);

      switch (args[1]) {
        case "resources":
          await resourceService.sendResourceList(message);
          break;

        case "pedir":
          const msgArgs = args;
          const resourceName = msgArgs.slice(2).join(" ");
          await resourceService.sendResource(resourceName, message);
          break;

        default:
          embedService.invalidCommandEmbed(message);
          break;
      }
    });
  }
}

module.exports = Message;
