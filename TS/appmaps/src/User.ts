import faker from "faker";
import { Markable } from "./CustomMap";

export class User implements Markable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "orange";
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markContent(): string {
        return `<h3>User Name: ${this.name}</h3>`;
    }
}
