import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort with Numbers Array
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sort with String
const charactersCollection = new CharactersCollection('hqawrs');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sort with LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-2);
linkedList.add(-10);
linkedList.sort();
linkedList.print();
