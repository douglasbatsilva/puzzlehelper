const { MongoClient, ServerApiVersion } = require("mongodb");

let client;

class ManageDB {
  static async connect() {
    client = new MongoClient(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    client.db("puzzlehelper");
    console.log("Database connection established");
  }

  static insert(collection, data) {
    return client.db("puzzlehelper").collection(collection).insertOne(data);
  }

  static async getAll(collection) {
    const response = await client
      .db("puzzlehelper")
      .collection(collection)
      .find({})
      .toArray();
    return response;
  }

  static async getOne(collection, query) {
    const response = await client
      .db("puzzlehelper")
      .collection(collection)
      .find(query)
      .toArray();

    if (response.length === 0) return "Resource not found";

    delete response[0]._id;

    if (response[0].previewUrl === null) delete response[0].previewUrl;

    return response[0];
  }
}

module.exports = ManageDB;
