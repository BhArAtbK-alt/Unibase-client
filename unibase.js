import { Table } from "./sql/table.js";
import { authService } from "./auth/authService.js";

class unibase {
    constructor(url, apiKey){
        this.url = url;
        this.apiKey = apiKey;

        this.auth = new authService(this);
        
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

console.log(obj.auth.updateUser(1, {
 
    email: 'omkar',
    password: '2355'
}));

                                                    