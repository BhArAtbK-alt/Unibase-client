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

    async addDoc(data) {
        return this.client.sendDocReq({
            action: 'add_doc',
            collection: this.collectionName,
            data: data
        });
    }

    async deleteDoc(filterObj) {

        const filters = Object.entries(filterObj).map(([field, value]) => ({
            field,
            value
        }));

        return this.client.sendDocReq({
            action: 'delete_doc',
            collection: this.collectionName,
            filters: filters
        });
    }

    async updateDoc(filterObj, newData) {
        const filters = Object.entries(filterObj).map(([field, value]) => ({ field, value }));
        return this.client.sendDocReq({
            action: 'update_doc',
            collection: this.collectionName,
            filters: filters,
            data: newData
        });
    }
}