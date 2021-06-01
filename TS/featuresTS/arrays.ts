export {}; // quick fix for cannot redeclare block scoped variable

const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"], 1];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // will error

// Help with 'map'

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date(), "2021-10-02"];
