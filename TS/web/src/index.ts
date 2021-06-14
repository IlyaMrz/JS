import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

// console.log(user.get("name"));
user.on("change", () => {
    console.log(user);
});

// user.save();
user.fetch();

// console.log(user);
// user.set({ name: "Allan" });
