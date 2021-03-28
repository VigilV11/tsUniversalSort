import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    [characters[rightIndex], characters[leftIndex]] = [
      characters[leftIndex],
      characters[rightIndex],
    ];

    this.data = characters.join('');
  }

  print() {
    console.log(this.data);
  }
}
