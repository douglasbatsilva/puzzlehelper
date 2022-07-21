const { asValue, Lifetime } = require("awilix");
const formatName = require("../dependency-formatter");

const registerServices = (container) => {
  if (process.env.NODE_ENV !== "test")
    console.log("\n", "Registering Services & Requests...", "\n");
  container.loadModules(
    [
      "../../services/**/*.service.js",
      "../../services/**/*.mapper.js",
    ],
    {
      cwd: __dirname,
      formatName,
    }
  );
  console.log("\n");
};

module.exports = registerServices;
