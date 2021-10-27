import { Device } from "./device.model";
import { Plan } from "./plan.model";
import { User } from "./user.model";

export class Subscription {
    id: number = 0;
    plan: Plan;
    user: User;
    devices: Device[];

    constructor(plan: Plan, user:User, devices:Device[]){
        this.plan = plan;
        this.user = user;
        this.devices = devices;
    }
}
