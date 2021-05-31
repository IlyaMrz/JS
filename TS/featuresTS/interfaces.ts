export {}; // quick fix for cannot redeclare block scoped variable
interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `
        Name: ${this.name}
        Year: ${this.year}
        Broken? - ${this.broken}
        `;
    },
};

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This drink has ${this.sugar} grams of sugar!`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
