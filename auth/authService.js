import { authBuilder } from "./authBuilder.js";

export class authService{
    constructor(client){
        this.client = client;
        this.payload = null;
    }

    createUser(data){
        return new authBuilder(
                { 
                    Action: 'create_user',
                    ...data
                },
                this.client
                )
    }

    

    deleteUser(data){
        return new authBuilder(
                { 
                    Action: 'delete_user',
                    ...data
                },
                this.client
                )
    }

    deleteUser(data){
        return new authBuilder(
                { 
                    Action: 'delete_user',
                    ...data
                },
                this.client
                )
    }

    updateUser(userID, data){
        return new authBuilder(
                { 
                    Action: 'update_user',
                    UserID: userID,
                    ...data
                },
                this.client
                )
    }
}