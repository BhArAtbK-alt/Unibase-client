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

const obj = new unibase("unibase.co", "asdfgghjjkkl").table('users').insert('age, name').values('20, omkar')