import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = new Node(data);
  }

  print() {
    if (!this.head) {
      throw new Error('Linked List is empty');
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  get length() {
    if (!this.head) {
      return 0;
    }

    let count = 0;
    let node: Node | null = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  // given an index return the Node at the index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // We will cheat and only swap data, not the node!
  swap(leftIndex: number, rightIndex: number): void {
    [this.at(rightIndex).data, this.at(leftIndex).data] = [
      this.at(leftIndex).data,
      this.at(rightIndex).data,
    ];
  }
}
