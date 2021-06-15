// import { User } from "./models/User";

import { Colletion } from "./models/Collection";

// const user = User.buildUser({ id: 1 });

// // console.log(user.get("name"));
// user.on("change", () => {
//     console.log(user);
// });

// // user.save();
// user.fetch();

// // console.log(user);
// // user.set({ name: "Allan" });

const collection = new Colletion("http://localhost:3000/users");
collection.on("change", () => {
    console.log(collection);
});
collection.fetch();
