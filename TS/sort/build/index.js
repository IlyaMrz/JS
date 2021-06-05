"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollections_1 = require("./NumbersCollections");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollections = new NumbersCollections_1.NumbersCollections([1, 3, 5, -4, 9, 0, 4, -44, 3, 44]);
numberCollections.sort();
var charCollection = new CharactersCollection_1.CharactersCollection("Hi! you look great!");
charCollection.sort();
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(1234);
linkedList.add(-33);
linkedList.add(0);
linkedList.add(10);
linkedList.sort();
console.log("\nnumbers:  " + numberCollections.data + "\n");
console.log("\nchar-s:  " + charCollection.data + "\n");
console.log("\nlinked list:");
linkedList.print();
