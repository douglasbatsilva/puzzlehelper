const baseMapper = require("../common/baseMapper");

class ResourceMapper extends baseMapper {
  constructor(opts) {
    super(opts, "resources");
  }

  async getAll() {
    const data =  await this.find({});
    return data
  }

  async findOne(query) {
    const data = await super.findOne(query);

    if (!data) return "Resource not found";

    return data
  }
}

module.exports = ResourceMapper;
