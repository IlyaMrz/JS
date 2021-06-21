"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var router = AppRouter_1.AppRouter.getInstance();
            var routeHanler = target.prototype[key];
            console.log("key2 controller: " + key);
            var path = Reflect.getMetadata("path", target.prototype, key);
            console.log("__path: " + path);
            if (path) {
                console.log("path path: " + path);
                router.get("" + routePrefix + path, routeHanler);
            }
        }
    };
}
exports.controller = controller;
