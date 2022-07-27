const { asValue } = require("awilix");
const { nanoid } = require("nanoid");

const registerDependencies = (container) => {
  container.register({ scope: asValue(container) });
  container.register("nanoid", asValue(nanoid));
};

module.exports = registerDependencies;
