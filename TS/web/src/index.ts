import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Rebecca", age: 19 });

const root = document.getElementById("root");

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
} else {
    throw new Error("Root element not found");
}

// import { User } from "./models/User";

// const collection = User.buildUserCollection();
// collection.on("change", () => {
//     console.log(collection);
// });
// collection.fetch();
