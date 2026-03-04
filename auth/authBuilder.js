export class authBuilder {
    constructor(payload, client) {
        this.payload = payload;
        this.client = client;
    }

    async run() {
        return await this.client.sendAuthReq(this.payload);
    }
}