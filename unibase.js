import { Table } from "./sql/table.js";

class unibase {
    constructor(url, apiKey){
        this.url = url;
        this.apiKey = apiKey;
        
    }

    table(tableName){
        return new Table(tableName, this);
    }
    
}

const obj = new unibase("unibase.co", "asdfgghjjkkl");
obj
  .table("users")
  .insert({name: "omkar" , age: 21, status: "active"})
  .returning("*");

                                                    