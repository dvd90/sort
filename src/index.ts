import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const charactersCollection = new CharactersCollection('hqawrs');

// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// sorter.sort();
// sorter2.sort();

// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-2);
linkedList.add(-10);

const sorter = new Sorter(linkedList);
sorter.sort();

linkedList.print();
