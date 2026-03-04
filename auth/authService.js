export class AuthService {
    constructor(client) {
        this.client = client; 
    }

    async signUp(data) {
        return this.client.sendAuthReq({
            action: 'create_user',
            data: data
        });
    }

    async signIn({ username, password, email = null }) {
    return this.client.sendAuthReq({
        action: 'login_with_username',
        data: { 
            username, 
            password, 
            email 
        }
    });
}
    async updateUser(userId, updates) {
        return this.client.sendAuthReq({
            action: 'update_user',
            id: userId,
            data: updates
        });
    }

    async getUserId(username) {
        return this.client.sendAuthReq({
            action: 'get_id',
            data: { username }
        });
    }
}