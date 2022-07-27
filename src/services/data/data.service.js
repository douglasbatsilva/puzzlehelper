const BaseService = require("../common/baseService");

class DataService extends BaseService {
  constructor(opts) {
    super(opts);
  }

  async prepareAndSave(resource, body) {
    const data = this.prepareDataToSabe({ resource, body });
    const response = await this.repository.insertOne(data);
    return response;
  }

  prepareDataToSabe({ resource, body }) {
    const data = {};

    data._id = this.nanoid();

    data.author = { 
      usarname: body.author.username ?? "",
      id: body.author.id ?? "",
      tag: body.author.tag ?? "",
      createdAt: body.author.createdAt ?? "",
    };

    if (resource != null) {
      data.resource = {
        type: resource.type,
        name: resource.name,
      };
    }

    data.at = new Date();

    return data;
  }
}

module.exports = DataService;
