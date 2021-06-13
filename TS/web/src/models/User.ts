import { Eventing } from "./Eventing";

export interface userProps {
    name?: string;
    age?: number;
    id?: number;
}

export class User {
    public events: Eventing = new Eventing();

    constructor(private data: userProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: userProps): void {
        Object.assign(this.data, update);
    }
}
