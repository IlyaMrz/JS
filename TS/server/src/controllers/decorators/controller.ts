import "reflect-metadata";
import { AppRouter } from "../../AppRouter";

export function controller(routePrefix: string) {
    return function (target: Function) {
        for (let key in target.prototype) {
            const router = AppRouter.getInstance();

            const routeHanler = target.prototype[key];
            console.log(`key2 controller: ${key}`);
            const path = Reflect.getMetadata("path", target.prototype, key);
            console.log(`__path: ${path}`);
            if (path) {
                console.log(`path path: ${path}`);
                router.get(`${routePrefix}${path}`, routeHanler);
            }
        }
    };
}
