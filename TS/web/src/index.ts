import { Collection } from "./models/Collection";
import { User, userProps } from "./models/User";
import { UserList } from "./views/UserList";

const collection = User.buildUserCollection();

collection.on("change", () => {
    console.log(collection);
    const root = document.getElementById("root");
    if (root) {
        new UserList(root, collection).render();
    } else {
        throw new Error("Root element not found");
    }
});

collection.fetch();

//-----------------------------
// import { User } from "./models/User";
// import { UserEdit } from "./views/UserEdit";

// const user = User.buildUser({ name: "Rebecca", age: 19 });

// const root = document.getElementById("root");

// if (root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
//     console.log(userEdit);
// } else {
//     throw new Error("Root element not found");
// }
//-------------------------
// import { User } from "./models/User";

// const collection = User.buildUserCollection();
// collection.on("change", () => {
//     console.log(collection);
// });
// collection.fetch();
