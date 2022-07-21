const { MongoClient } = require("mongodb");

let client;

module.exports = async () => {
  if (client == null) {
    client = new MongoClient(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    console.log("Database connected");
  }
  return client;
};
