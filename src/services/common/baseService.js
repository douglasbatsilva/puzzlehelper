class BaseService {
  constructor(opts) {
    this.scope = opts.scope;
    this.repository = null;

    const repositoryName = `${this.constructor.name
      .toLowerCase()
      .replace("service", "Mapper")}`;

    if (this.scope.hasRegistration(`${repositoryName}`)) {
      this.repository = this.scope.resolve(`${repositoryName}`);
    }
  }
}

module.exports = BaseService;
