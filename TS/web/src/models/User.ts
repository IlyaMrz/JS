import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface userProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<userProps> {
    static buildUser(attrs: userProps): User {
        return new User(
            new Attributes<userProps>(attrs),
            new Eventing(),
            new ApiSync<userProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, userProps> {
        return new Collection<User, userProps>("http://localhost:3000/users", (json: userProps) =>
            User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const newAge = Math.floor(Math.random() * 100);
        this.set({ age: newAge });
    }
}
