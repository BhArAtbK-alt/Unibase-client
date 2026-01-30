export class deleteBuilder {
    constructor(tableName, client){
        this.tableName = tableName;
        this.client = client;

        this.queryObject = {
            table: tableName,
            type: 'DELETE',
            conditions: [],
            returning: "*"
        }
    }

    where (field, operator, val){
        this.queryObject.conditions.push({field, operator, val});
        return this;
    }

    returning(cols = "*") {
        this.queryObject.returning = cols;
        console.log(this.queryObject);
        
        return this;
    }


}