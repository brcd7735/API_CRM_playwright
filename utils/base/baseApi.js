

export class BaseApi {
    constructor() {
        this.apiKey = process.env.API_KEY;
        this.apiUrl = process.env.OPEN_API_URL;
    }

    getUrl(url) {
        return `${this.apiUrl}${url}?api_key=${this.apiKey}`
    }

}