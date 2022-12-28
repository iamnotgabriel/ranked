import { Item } from "@/domain/item";

export class Rank {
  readonly eliminated: Item[];
  private constructor(public items: Item[]) {
    this.eliminated = [];
  }

  battle(winner: Item, looser: Item): void {
    this.verifyItems(winner, looser);

    this.eliminated.push(looser);
    this.items = this.items.filter((item) => item !== looser);
    winner.won(looser);
    looser.loss(winner);
  }

  private verifyItems(winner: Item, looser: Item) {
    const compare = (item: Item) => (it: Item) => it.value === item.value;
    if (!this.items.some(compare(winner))) {
      throw Error(`Battle with an unknown winner '${winner.value}'`);
    } else if (!this.items.some(compare(looser))) {
      throw Error(`Battle with an unknown looser '${looser.value}'`);
    }
  }

  static from(items: Item[]): Rank {
    items = Rank.randomize([...items]);
    return new Rank(items);
  }

  private static randomize(items: Item[]): Item[] {
    for (let i = items.length - 1; i >= 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
}
