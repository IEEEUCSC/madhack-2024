export class Network {
    public static shared: Network = new Network();
    
    constructor() {}

    public register(data: any): Promise<ResponseModel> {
        console.log("Data", data);
        return this.sendRequest('http://localhost:4011/api/register', 'POST', JSON.stringify(data));
    }

    private async sendRequest(url: string, method: string, body: string | null): Promise<any> {
        console.log("body", body);
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
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