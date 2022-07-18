const { MessageEmbed } = require("discord.js");
const COMMUNITY_CREDITS = { text: "🧩 By Puzzle Community" };

class EmbedService {
  sendResourceEmbed(resource, message) {
    const preview =
      resource.previewUrl != null
        ? `[Clique aqui!](${resource.previewUrl})`
        : "Não há";

    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setThumbnail("https://i.imgur.com/jnVu8oS.png")
      .setTitle("🎁 → Resource Pedido")
      .addFields(
        { name: "⠀\nScript:", value: resource.name },
        { name: "Preview:", value: preview },
        {
          name: "Download:",
          value: `[Clique aqui!](${resource.downloadUrl})\n⠀`,
        }
      )
      .setFooter(COMMUNITY_CREDITS);

    const dmEmbed = new MessageEmbed()
      .setColor("#00FF7F")
      .addFields({
        name: "\n✅   ENVIADO\n",
        value: `⠀\n• <@${message.author.id}>, o resource **${resource.name}** foi enviado para seu privado!`,
      })
      .setFooter(COMMUNITY_CREDITS);

    message.channel.send({ embeds: [dmEmbed] });
    return message.author.send({ embeds: [exampleEmbed] });
  }

  findedResourceEmbed(message) {
    const exampleEmbed = new MessageEmbed()
      .setColor("#00FF7F")
      .addFields({
        name: "\n✅   SUCESSO",
        value: "⠀\n• Lista de resources enviada para seu privado!",
      })
      .setFooter(COMMUNITY_CREDITS);

    return message.channel.send({ embeds: [exampleEmbed] });
  }

  notFoundResourceEmbed(resourceName, message) {
    const exampleEmbed = new MessageEmbed()
      .setColor("#B22222")
      .addFields({
        name: "\n❌   FALHA",
        value: `⠀\n• O resource  **${resourceName}** não foi encontrado!
        Digite ***ph.resources*** para ver a Lista completa`,
      })
      .setFooter(COMMUNITY_CREDITS);

    return message.channel.send({ embeds: [exampleEmbed] });
  }

  invalidCommandEmbed(message) {
    const exampleEmbed = new MessageEmbed()
      .setColor("#A52A2A")
      .addFields({
        name: "\n❌   COMANDO INVÁLIDO",
        value: `⠀\n• Este comando não existe
        - Digite: **".ph resources"** ou **"ph.pedir"**`,
      })
      .setFooter(COMMUNITY_CREDITS);

    return message.channel.send({ embeds: [exampleEmbed] });
  }
}

module.exports = new EmbedService();
