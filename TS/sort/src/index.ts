import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollections = new NumbersCollections([1, 3, 5, -4, 9, 0, 4, -44, 3, 44]);
numberCollections.sort();

const charCollection = new CharactersCollection("Hi! you look great!");
charCollection.sort();

const linkedList = new LinkedList();
linkedList.add(1234);
linkedList.add(-33);
linkedList.add(0);
linkedList.add(10);
linkedList.sort();

console.log(`
numbers:  ${numberCollections.data}
`);
console.log(`
char-s:  ${charCollection.data}
`);
console.log(`
linked list:`);
linkedList.print();
