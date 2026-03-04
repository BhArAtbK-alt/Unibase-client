export class selectBuilder {
    constructor(tableName, columns, client) {
        this.client = client;
        this.tableName = tableName;

        this.queryObject = {
            table: tableName,
            action: 'SELECT',
            columns: columns || '*',
            conditions: [],
            orderBy: 'id', 
            direction: 'ASC',
            returning: '*',
            limit: null
        };
    }

    where(field, operator, value) {
        this.queryObject.conditions.push({ field, operator, value });
        return this;
    }

    orderBy(column, dir = 'ASC') {
        this.queryObject.orderBy = column;
        this.queryObject.direction = dir;
        return this;
    }

    direction(dir) {
        this.queryObject.direction = dir;
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
        return await this.client.sendSqlReq(this.queryObject);
    }
}