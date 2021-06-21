import "reflect-metadata";

export function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        console.log(`key1: ${key}`);
        Reflect.defineMetadata("path", path, target, key);
    };
}
