const { asValue, Lifetime } = require("awilix");
const mongoConnection = require("../../database/mongo");
const SINGLETON = { lifetime: Lifetime.SINGLETON };

const registerDatabase = (container) => {
  container.register(
    "mongoConnection",
    asValue(mongoConnection("puzzlehelper"), SINGLETON)
  );

  mongoConnection().then((cnn) => {
    container.register("db", asValue(cnn.db("puzzlehelper"), SINGLETON));
  });
  container.register("mapperOptions", asValue({}));
};

module.exports = registerDatabase;