"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHanler = target.prototype[key];
            console.log("key2 controller: " + key);
            var path = Reflect.getMetadata("path", target.prototype, key);
            console.log("__path: " + path);
            if (path) {
                console.log("path path: " + path);
                exports.router.get("" + routePrefix + path, routeHanler);
            }
        }
    };
}
exports.controller = controller;
