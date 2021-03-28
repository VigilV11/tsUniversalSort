// Sort numbers, strings, and linked list

import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, 5, 3, -2, 7, -10]);
numbersCollection.sort();
numbersCollection.print();

const stringCollection = new StringCollection('xYaBcE');
stringCollection.sort();
stringCollection.print();

const linkedList = new LinkedList();

linkedList.add(23);
linkedList.add(-10);
linkedList.add(100);
linkedList.add(5);
linkedList.add(250);
linkedList.add(-27);

linkedList.sort();
linkedList.print();
