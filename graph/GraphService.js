export class GraphService {
    constructor(sdk) {
        this.sdk = sdk;
    }

    async createNode(nodeName, data = {}) {
        return this.sdk._request(`${this.sdk.url}/api/graph`, {
            action: "CREATE_NODE",
            node_name: nodeName,
            properties: data
        });
    }

    async connect(from, to, relationship, data = {}) {
        return this.sdk._request(`${this.sdk.url}/api/graph`, {
            action: "CREATE_RELATIONSHIP",
            from_node: from,
            to_node: to,
            relationship: relationship,
            properties: data
        });
    }


    async disconnect(from, to, relationship) {
        return this.sdk._request(`${this.sdk.url}/api/graph`, {
            action: "DELETE_RELATIONSHIP",
            from_node: from,
            to_node: to,
            relationship: relationship
        });
    }
}