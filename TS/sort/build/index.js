"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollections_1 = require("./NumbersCollections");
var numberCollections = new NumbersCollections_1.NumbersCollections([1, 3, 5, -4, 9, 0, 4, -44, 3, 44]);
var sorter = new Sorter_1.Sorter(numberCollections);
sorter.sort();
console.log(numberCollections.data);
