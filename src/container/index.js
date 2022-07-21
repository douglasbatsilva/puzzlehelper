const {
  registerDependencies,
  registerDatabase,
  registerServices,
  registerDiscord,
} = require("./registrations");

module.exports = async function loadContainer(container, config) {
  registerDatabase(container, config);
  registerDependencies(container);
  registerServices(container);
  registerDiscord(container);
  return container;
};
