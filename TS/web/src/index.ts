import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Rebecca", age: 19 });

const root = document.getElementById("root");

if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();
} else {
    throw new Error("Root element not found");
}

// import { User } from "./models/User";

// const collection = User.buildUserCollection();
// collection.on("change", () => {
//     console.log(collection);
// });
// collection.fetch();
