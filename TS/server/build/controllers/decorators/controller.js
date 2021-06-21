"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var router = AppRouter_1.AppRouter.getInstance();
            var routeHanler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            if (path) {
                router[method]("" + routePrefix + path, routeHanler);
            }
        }
    };
}
exports.controller = controller;
