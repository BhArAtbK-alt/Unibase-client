export class insertBuilder {
    constructor(tableName, columns, client){
        this.tableName = tableName;
        this.client = client;

        this.queryObject = {
            table: tableName,
            columns: [...columns],
            values: [],
            return: "*"
        }
    }

    values (...val){
        console.log(...val);
        
        this.queryObject.values.push(val);
        
        console.log(this.queryObject);
        
        return this;
    }

    
}