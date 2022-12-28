export class Item {
  victories: Item[];
  losses: Item[];

  constructor(private readonly value: string) {
    this.losses = [];
    this.victories = [];
  }

  won(item: Item): void {
    this.victories.push(item);
  }

  loss(item: Item): void {
    this.losses.push(item);
  }
}
