let apples: number = 5;
let speed: string = "fast";
let hasNmae: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true];

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number; to: string } = {
    x: 10,
    y: 20,
    to: "left",
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Funtcion that returs the 'any' type
const json = '{"x:"10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and then initalizate it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers2 = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // false or number from array above 0
for (let i of numbers2) {
    if (i > 0) numberAboveZero = i;
}
