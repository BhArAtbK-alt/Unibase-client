export class StorageService {
    constructor(sdk) {
        this.sdk = sdk;
    }

    async upload(file, customName = null) {
        const formData = new FormData();
        formData.append("file", file);
        if (customName) formData.append("customFileName", customName);

        const response = await fetch(`${this.sdk.url}/api/storage/upload`, {
            method: 'POST',
            headers: {
                'ub-api-key': this.sdk.apiKey,
                'ngrok-skip-browser-warning': '69420'
            },
            body: formData
        });

        const result = await response.json();
        if (!result.success) throw new Error(result.message);
        return result.data;
    }

    async list() {
        const response = await fetch(`${this.sdk.url}/api/storage/list`, {
            method: 'GET',
            headers: {
                'ub-api-key': this.sdk.apiKey,
                'ngrok-skip-browser-warning': '69420'
            }
        });
        const result = await response.json();
        return result.data;
    }
}