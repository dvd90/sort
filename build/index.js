"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Sort with Numbers Array
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sort with String
var charactersCollection = new CharactersCollection_1.CharactersCollection('hqawrs');
charactersCollection.sort();
console.log(charactersCollection.data);
// Sort with LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-2);
linkedList.add(-10);
linkedList.sort();
linkedList.print();
