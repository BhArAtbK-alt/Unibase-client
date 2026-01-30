export class selectBuilder {
    constructor(tableName, columns, client){
        
        this.client = client;
        this.tableName = tableName;
        
        this.queryObject = {
            table: tableName,
            action: 'SELECT',
            columns: columns,
            conditions: [],
            direction: 'ASC',
            returning: '*',
            limit: null
        }

        
        
    }

    where(field , operator, value){
            this.queryObject.conditions.push( { field, operator, value } );
            
            return this;
    }

    direction (dir){
        this.queryObject.direction = dir;
        console.log(this.queryObject);
        return this;
    }

    limit (num){
         this.queryObject.limit = num;
         
         return this;
    }

    returning(cols = "*") {
        this.queryObject.return = cols;
        console.log(this.queryObject);
        
        return this;
    }

   

    
}