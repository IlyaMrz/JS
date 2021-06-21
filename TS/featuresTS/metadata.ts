import "reflect-metadata";

class Plane {
    color: string = "red";

    @markFunction
    fly(): void {
        console.log("weeeeeo");
    }
}

function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata("secret", 123, target, key);
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret);

// const plane = {
//     color: "grey",
// };

// Reflect.defineMetadata("note2", "hi there 2", plane, "color");
// console.log(Reflect.getMetadata("note2", plane, "color"));

// Reflect.defineMetadata("note", "hi there", plane);
// console.log(Reflect.getMetadata("note", plane));
