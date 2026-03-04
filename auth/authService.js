import { authBuilder } from "./authBuilder.js";

export class AuthService {
    constructor(client) {
        this.client = client;
    }

    signUp(userData) {
        return new authBuilder({
            action: 'create_user',
            data: userData 
        }, this.client);
    }

    signIn({ username, password }) {
        return new authBuilder({
            action: 'login_with_username',
            data: { username, password } 
        }, this.client);
    }

    updateUser(userId, updates) {
        return new authBuilder({
            action: 'update_user',
            id: userId,    
            data: updates  
        }, this.client);
    }

    getUserId(username) {
        return new authBuilder({
            action: 'get_id',
            data: { username } 
        }, this.client);
    }
}