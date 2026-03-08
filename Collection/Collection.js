export class Collection {
    constructor(collectionName, client) {
        this.collectionName = collectionName;
        this.client = client;
    }

    /**
     * get() -> gets all documents
     * get(field, operator, value) -> gets filtered documents
     */
    async get(field = null, operator = null, value = null) {
        const payload = {
            collection: this.collectionName,
        };

        // If arguments are provided, it's a conditional query
        if (field && operator && value !== null) {
            payload.action = 'query_docs';
            payload.filter = { field, operator, value };
        } else {
            // Otherwise, get everything
            payload.action = 'get_all_docs';
        }

        return this.client.sendDocReq(payload);
    }

    /**
     * Get a single document by ID
     */
    async findById(docId) {
        return this.client.sendDocReq({
            action: 'get_doc_by_id',
            collection: this.collectionName,
            documentId: docId
        });
    }
}