export class insertBuilder {
    constructor(tableName, values, client){
        this.tableName = tableName;
        this.client = client;

        this.queryObject = {
            table: tableName,
            action: 'INSERT',
            conditions: [],
            values: values,
            return: "*"
        }
    }

    where (field, operator, val) {
        this.queryObject.conditions.push({field, operator, val});
        return this;
    }

    returning(cols = "*") {
    this.queryObject.return = cols;
    console.log(this.queryObject);
    
        return this;
    }

    
}