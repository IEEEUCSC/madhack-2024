export class Network {
    public static shared: Network = new Network();
    
    constructor() {}

    public register(data: any): Promise<ResponseModel> {
        // return this.sendRequest('http://localhost:4011/api/register', 'POST', JSON.stringify(data));
        // get the url from the .env file
        return this.sendRequest("https://whale-app-h5o2s.ondigitalocean.app"+ '/api/register', 'POST', JSON.stringify(data));

    }

    private async sendRequest(url: string, method: string, body: string | null): Promise<any> {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
               

            },
            body: body
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
}

export class ResponseModel {
    public success: boolean;
    public message: string;

    constructor(success: boolean, message: string) {
        this.success = success;
        this.message = message;
    }
}
