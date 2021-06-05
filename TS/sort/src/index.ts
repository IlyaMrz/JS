import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";

const numberCollections = new NumbersCollections([1, 3, 5, -4, 9, 0, 4, -44, 3, 44]);
const sorter = new Sorter(numberCollections);
sorter.sort();

const charCollection = new CharactersCollection("Hi! you look great!");
const sorter2 = new Sorter(charCollection);
sorter2.sort();

console.log("numbers: ", numberCollections.data);
console.log("char-s: ", charCollection.data);
