const fs = require("fs");
const BaseService = require("../common/baseService");

class ResourceService extends BaseService {
  constructor(opts) {
    super(opts);
    this.dataService = opts.dataService;
    this.embedService = opts.embedService;
  }

  async sendResourceList(message) {
    const resourceList = await this.repository.getAll();

    this.saveResourceListOnFile(resourceList);

    this.sendMessageToCustomer(message);
  }

  saveResourceListOnFile(resourceList) {
    const resources = [];
    const types = resourceList.map((r) => r.type);
  
    const typesUnique = types.filter((item, pos, ary) => {
      return ary.indexOf(item) === pos;
    });
  
    typesUnique.forEach(element => {
      resources.push(" ")
      resources.push(this.formatResourceNamesToFile(resourceList, element));
    });
    const flatresources = resources.flat();
    const JoinToFile = flatresources.join("\n- ");
    
    fs.writeFile("resources.txt", JoinToFile, function (err) {
      if (err) return console.log(err);
    });
  };
  
  formatResourceNamesToFile(resourceList, type) {
    let resources = [];
  
    const list = resourceList.filter((r) => r.type === type);
  
    const sanitizedList = list.map((r) => r.name);
    resources.push("»»»»»»" + type + "»»»»»»" , sanitizedList.sort().join("\n- "));
  
    return resources;
  };

  async sendMessageToCustomer(message) {
    this.embedService.findedResourceEmbed(message);

    const file = { attachment: "resources.txt" };

    message.author.send({ files: [file] });
  }

  async sendResource(resourceName, message) {
    const query = { name: resourceName };
    const resource = await this.repository.findOne(query);

    if (resource == "Resource not found")
      return this.embedService.notFoundResourceEmbed(resourceName, message);

    this.embedService.sendResourceEmbed(resource, message);
    this.dataService.prepareAndSave(resource, message);
  }
}

module.exports = ResourceService;
