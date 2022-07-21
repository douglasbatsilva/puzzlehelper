class BaseMapper {
  constructor(opts, modelName) {
    const { db } = opts;
    this.collection = db.collection(modelName);
  }

  async insertOne(body) {
    return this.collection.insertOne(body);
  }

  async find(body) {
    return this.collection.find(body).toArray();
  }

  async findOne(body) {
    return this.collection.findOne(body);
  }

  async delete(body) {
    return this.collection.deleteOne(body);
  }
}

module.exports = BaseMapper;
