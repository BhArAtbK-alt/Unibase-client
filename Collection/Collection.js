export class Collection {
    constructor(collectionName, client) {
        this.collectionName = collectionName;
        this.client = client;
    }


    async get(field = null, operator = null, value = null) {
        const payload = {
            collection: this.collectionName,
        };

        if (field && operator && value !== null) {
            payload.action = 'query_docs';
            payload.filter = { field, operator, value };
        } else {
            payload.action = 'get_all_docs';
        }

        return this.client.sendDocReq(payload);
    }

    async findById(docId) {
        return this.client.sendDocReq({
            action: 'get_doc_by_id',
            collection: this.collectionName,
            documentId: docId
        });
    }
}