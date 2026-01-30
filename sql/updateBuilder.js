export class updateBuilder {
  constructor(tableName, values, client) {
    this.client = client;

    this.queryObject = {
      table: tableName,
      action: "UPDATE",
      set: { ...values },
      conditions: [],
      limit: null,
      return: "*"
    };
  }

  where(field, operator, value) {
    this.queryObject.conditions.push({ field, operator, value });
    return this;
  }

  limit(num) {
    this.queryObject.limit = num;
    return this;
  }

  returning(cols = "*") {
    this.queryObject.return = cols;
    console.log(this.queryObject);
    
    return this;
  }

  build() {
    return this.queryObject;
  }
}
