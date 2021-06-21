"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        console.log("key1: " + key);
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.get = get;
