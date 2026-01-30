import { selectBuilder } from "./selectBuilder.js";
import { insertBuilder } from "./insertBuilder.js";
import { updateBuilder } from "./updateBuilder.js";
import { deleteBuilder } from "./deleteBuilder.js";

export class Table{
    constructor(tableName, client){
        this.client = client;
        this.tableName = tableName;
    }

    select(...columns){
        
        
        return new selectBuilder(this.tableName, columns, this.client)
    }

    insert (values){
        //console.log(typeof(values));
        
        if (typeof values !== "object" || Array.isArray(values)) {
         throw new Error("insert() expects an object");
        }
        return new insertBuilder(this.tableName, values, this.client);
    }

    update(values) {
    if (typeof values !== "object" || Array.isArray(values)) {
      throw new Error("update() expects an object");
    }

    return new updateBuilder(this.tableName, values, this.client);
    }

    delete() {
        return new deleteBuilder(this.tableName, this.client);
    }
}