import { selectBuilder } from "./selectBuilder.js";
import { insertBuilder } from "./insertBuilder.js";

export class Table{
    constructor(tableName, client){
        
        this.client = client;
        this.tableName = tableName;
    }

    select(...columns){
        return new selectBuilder(this.tableName, columns, this.client)
    }

    insert (columns){
        return new insertBuilder(this.tableName, columns, this.client);
    }
}