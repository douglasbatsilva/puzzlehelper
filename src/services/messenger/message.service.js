const prefix = ".ph";

class MessageService {
  constructor(opts) {
    this.embedService = opts.embedService;
    this.resourceService = opts.resourceService;
  }

  async handleMessage(message) {
    if (
      !message.channelId === "998625559007477781" &&
      message.guild.name === "Puzzle Community"
    )
      return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    switch (args[1]) {
      case "resources":
        await this.resourceService.sendResourceList(message);
        break;

      case "pedir":
        const msgArgs = args;
        const resourceName = msgArgs.slice(2).join(" ");
        await this.resourceService.sendResource(resourceName, message);
        break;

      default:
        this.embedService.invalidCommandEmbed(message);
        break;
    }
  }
}

module.exports = MessageService;
