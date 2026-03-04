import { AuthService } from "./auth/authService.js";
import { Table } from "./sql/table.js"; 

export class Unibase {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        

        this.auth = new AuthService(this);
    }

    table(tableName) {
        return new Table(tableName, this);
    }

    async sendAuthReq(payload) {
        
        
        return this._request(`${this.url}/api/auth`, payload);
    }

    async sendSqlReq(payload) {
        console.log(payload);
        
        return this._request(`${this.url}/api/query`, payload);
    }

    async query(sql, params = []) {
        console.log(sql, params);
        

        return this._request(`${this.url}/api/query`, {
            action: 'raw_sql',
            sql: sql,
            params: params
        });
    }

    
    async _request(endpoint, payload) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ub-api-key': this.apiKey 
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

           
            if (result.success === false) {
                throw new Error(result.message || "Request Failed");
            }


            return result.data || result.userdata;

        } catch (error) {
            console.error(`Unibase SDK Error: ${error.message}`);
            throw error;
        }
    }
}