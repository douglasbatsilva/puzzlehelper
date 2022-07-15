const prefix = ".ph";
const resourceService = require("./services/resources.service");

function messages(bot) {
  bot.on("messageCreate", async (message) => {
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
        message.author.send(`Comando inválido! Use ${prefix}help`);
        break;
    }
  });
}

module.exports = (bot) => messages(bot);
