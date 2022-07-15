const fs = require("fs");
const ManageDB = require("../../infra/mongo");
const embedService = require("./embed.service");

class ResourceService {
  async sendResourceList(message) {
    const resourceList = await ManageDB.getAll("resources");

    this.saveResourceListOnFile(resourceList);

    this.sendMessageToCustomer(message);
  }

  saveResourceListOnFile(resourceList) {
    let resources = [];

    const scriptsList = resourceList.filter((r) => r.type === "script");
    const mapsList = resourceList.filter((r) => r.type === "map");
    const baseList = resourceList.filter((re) => re.type === "base");

    const sanitizedScripts = scriptsList.map((r) => r.name);
    resources.push("»»»»»» Scripts »»»»»»",sanitizedScripts.sort().join("\n- "));

    const sanitizedMaps = mapsList.map((r) => r.name);
    resources.push("\n»»»»»» Mapas »»»»»»»»",sanitizedMaps.sort().join("\n- "));

    const sanitizedBases = baseList.map((r) => r.name);
    resources.push("\n»»»»»» Bases »»»»»»»»",sanitizedBases.sort().join("\n- "));

    const JoinToFile = resources.join("\n- ");

    fs.writeFile("resources.txt", JoinToFile, function (err) {
      if (err) return console.log(err);
    });
  }

  sendMessageToCustomer(message) {
    embedService.findedResourceEmbed(message);

    const file = { attachment: "resources.txt" };

    message.author.send({ files: [file] });
  }

  async sendResource(resourceName, message) {
    const resource = await ManageDB.getOne("resources", { name: resourceName });

    if (resource == "Resource not found")
      return embedService.notFoundResourceEmbed(resourceName, message);

    embedService.sendResourceEmbed(resource, message);
  }
}

module.exports = new ResourceService();
