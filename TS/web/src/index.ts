import { User } from "./models/User";

const user = new User({ name: "Brouty", age: 12 });

user.events.on("change", () => {
    console.log("weee");
});
user.events.trigger("change");
