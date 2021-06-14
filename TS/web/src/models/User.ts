import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

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
}
