import "reflect-metadata";

@printMetadata
class Plane {
    color: string = "red";

    @markFunction("hello there")
    fly(): void {
        console.log("weeeeeo");
    }
}

function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata("secret", secretInfo, target, key);
    };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata("secret", target.prototype, key);
        console.log(secret);
    }
}

// const plane = {
//     color: "grey",
// };

// Reflect.defineMetadata("note2", "hi there 2", plane, "color");
// console.log(Reflect.getMetadata("note2", plane, "color"));

// Reflect.defineMetadata("note", "hi there", plane);
// console.log(Reflect.getMetadata("note", plane));

// router example below

@controller
class Plane {
    color: string = "red";

    @get("/login")
    fly(): void {
        console.log("weeeeeo");
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata("path", path, target, key);
    };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata("path", target.prototype, key);
        console.log(path);

        router.get(path, target.prototype[key]);
    }
}
