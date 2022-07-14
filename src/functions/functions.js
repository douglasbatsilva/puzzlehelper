const { MessageEmbed } = require("discord.js");
const ManageDB = require("../../infra/mongo");
const prefix = ".ph";
const fs = require("fs");

function messages(bot) {
  bot.on("messageCreate", async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    if (args[1] === "resources") {
      await sendResourceList(message);
    } else if (args[1] === "pedir") {
      await sendResource(args[2], message);
    } else {
      const exampleEmbed = new MessageEmbed()
        .setColor("#0099ff")
        .setThumbnail("https://i.imgur.com/jnVu8oS.png")
        .setTitle("→ Resource Pedido")
        .addFields(
          { name: "⠀\nDownload", value: "[Clique aqui!](http://example.com)" },
          { name: "Preview", value: "[Clique aqui!](http://example.com)\n⠀" }
        )
        .setFooter({ text: "🧩 By Puzzle Community" });

      message.channel.send({ embeds: [exampleEmbed] });
    }
  });
}

const sendResourceList = async (message) => {
  const resourceList = await ManageDB.getAll("resources");

  saveResourceListOnFile(resourceList);

  sendMessageToCustomer(message);
};

const saveResourceListOnFile = (resourceList) => {
  let resources = [];

  const scriptsList = resourceList.filter((r) => r.type === "script");
  const mapsList = resourceList.filter((r) => r.type === "map");
  const baseList = resourceList.filter((re) => re.type === "base");

  const sanitizedScripts = scriptsList.map((r) => r.name);
  resources.push("»»»»»» Scripts »»»»»»", sanitizedScripts.sort().join("\n- "));

  const sanitizedMaps = mapsList.map((r) => r.name);
  resources.push("\n»»»»»» Mapas »»»»»»»»", sanitizedMaps.sort().join("\n- "));

  const sanitizedBases = baseList.map((r) => r.name);
  resources.push("\n»»»»»» Bases »»»»»»»»", sanitizedBases.sort().join("\n- "));

  const JoinToFile = resources.join("\n- ");

  fs.writeFile("resources.txt", JoinToFile, function (err) {
    if (err) return console.log(err);
  });
};

const sendMessageToCustomer = (message) => {
  try {
    message.author.send({
      files: [{ attachment: "resources.txt" }],
    });
  } catch (error) {
    console.log(error);
  }
};

const sendResource = async (resourceName, message) => {
  const resource = await ManageDB.getOne("resources", { name: resourceName });

  if (resource == "Resource not found")
    return message.author.send(`Resource ${resourceName} not found`);

  const preview =
    resource.previewUrl != null
      ? `[Clique aqui!](http://${resource.previewUrl})`
      : "Não há";

  const exampleEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setThumbnail("https://i.imgur.com/jnVu8oS.png")
    .setTitle("→ Resource Pedido")
    .addFields(
      { name: "⠀\nScript:", value: resource.name },
      { name: "Preview:", value: preview },
      {
        name: "Download:",
        value: `[Clique aqui!](http://${resource.downloadUrl})\n⠀`,
      }
    )
    .setFooter({ text: "🧩 By Puzzle Community" });

  message.author.send({ embeds: [exampleEmbed] });
};

module.exports = (bot) => messages(bot);
