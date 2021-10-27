export class Plan {
    id: number = 0;
    name: string;
    description: string;
    bandwidthLimit: string;
    devices: number;
    price: number;

    constructor(name: string, description: string, bandwidthLimit: string, devices: number, price: number){
        this.name = name;
        this.description = description;
        this.bandwidthLimit = bandwidthLimit;
        this.devices = devices;
        this.price = price;
    }
}
