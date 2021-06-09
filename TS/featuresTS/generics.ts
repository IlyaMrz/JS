class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}
    get(index: number): string {
        return this.collection[index];
    }
}

//generic
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index];
    }
}

const numberArray = new ArrayOfAnything<number>([1, 23, 4, 5]);
const stringArray = new ArrayOfAnything(["a", "33", "asdf", "apple"]); //type inference

numberArray.get(1); //?
stringArray.get(3); //?

// generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything<string>(["y", "g", "g"]);
printAnything(["1", 2, 3]); //type inference

//generic constraints

class Car {
    print() {
        console.log("I am a car");
    }
}

class House {
    print() {
        console.log("i am a house");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars([new House(), new Car()]); //?
