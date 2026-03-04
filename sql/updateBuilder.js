export class updateBuilder {
  constructor(tableName, values, client) {
    this.client = client;

    this.queryObject = {
      table: tableName,
      action: "UPDATE",
      set: { ...values },
      conditions: [],
      limit: null,
      returning: "*"
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
    this.queryObject.returning = cols;
    return this;
  }

  async execute() {
    if (this.queryObject.conditions.length === 0) {
      throw new Error("Safety Error: UPDATE requires at least one .where() condition.");
    }

    if (!this.queryObject.set || Object.keys(this.queryObject.set).length === 0) {
      throw new Error("Update failed: No values provided for SET clause.");
    }

    return await this.client.sendSqlReq(this.queryObject);
  }

  build() {
    return this.queryObject;
  }
}