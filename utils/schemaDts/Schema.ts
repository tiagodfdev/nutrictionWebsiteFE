abstract class Schema {
    base:string

    constructor() {
      this.base = `{
      "@context": "https://schema.org",
    }`;
    }
}

export default Schema;
