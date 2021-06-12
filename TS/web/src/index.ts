import { User } from "./models/User";

const user = new User({ name: "Brouty", age: 12 });
user.save();
