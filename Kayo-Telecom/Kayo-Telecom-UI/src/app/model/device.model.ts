import { Subscription } from "./subscription.model";

export class Device {
    id: number = 0;
    subscription: Subscription;
    name: string;
    phoneNumber: string;

    constructor(subscription: Subscription, name: string, phoneNumber: string){
        this.subscription = subscription;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}
