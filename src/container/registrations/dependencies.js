const { asValue } = require("awilix");

const registerDependencies = (container) => {
  container.register({ scope: asValue(container) });
};

module.exports = registerDependencies;
