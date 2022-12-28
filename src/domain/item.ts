export class Item {
  victories: Item[];
  losses: Item[];

  constructor(readonly value: string) {
    this.losses = [];
    this.victories = [];
  }

  won(item: Item): void {
    this.victories.push(item);
  }

  loss(item: Item): void {
    this.losses.push(item);
  }

  compare(item: Item): -1 | 0 | 1 | undefined {
    const compare = (it: Item) => it.value === item.value;
    if (this.value === item.value) {
      return 0;
    }
    if (this.victories.some(compare)) {
      return 1;
    }
    if (this.losses.some(compare)) {
      return -1;
    }
    return undefined;
  }
}
