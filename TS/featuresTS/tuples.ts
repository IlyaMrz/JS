const drink = {
    color: "vrown",
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
// pepsi[0] = 40; // will error
const sprite: Drink = ["white", true, 30];

const carSpecs: [number, number] = [400, 3322];

const carStats = {
    horsepower: 400,
    weight: 3322,
};
