import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";

const numberCollections = new NumbersCollections([1, 3, 5, -4, 9, 0, 4, -44, 3, 44]);
const sorter = new Sorter(numberCollections);
sorter.sort();

console.log(numberCollections.data);
