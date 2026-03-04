export class deleteBuilder {
    constructor(tableName, client) {
        this.tableName = tableName;
        this.client = client;

        this.queryObject = {
            table: tableName,
            action: 'DELETE',
            conditions: [],
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
        if (this.queryObject.conditions.length === 0) {
            throw new Error("Safety Error: DELETE requires at least one .where() condition.");
        }

        return await this.client.sendSqlReq(this.queryObject);
    }
}