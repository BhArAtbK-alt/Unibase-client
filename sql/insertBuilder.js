export class insertBuilder {
    constructor(tableName, values, client) {
        this.tableName = tableName;
        this.client = client;

        this.queryObject = {
            table: tableName,
            action: 'INSERT',
            conditions: [],
            values: values,
            returning: "*"
        }
    }

    where(field, operator, value) {
        this.queryObject.conditions.push({ field, operator, value });
        return this;
    }

    returning(cols = "*") {
        this.queryObject.returning = cols;
        return this;
    }

    async execute() {
        if (!this.queryObject.values) {
            throw new Error("Insert failed: No values provided.");
        }
        
        return await this.client.sendSqlReq(this.queryObject);
    }
}