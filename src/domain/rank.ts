import { Item } from "@/domain/item";

export class Rank {
  private readonly eliminated: Item[];
  private constructor(private items: Item[]) {
    this.eliminated = [];
  }

  battle(winner: Item, looser: Item): void {
    this.eliminated.push(looser);
    this.items.filter((item) => item !== looser);
  }

  static from(items: Item[]): Rank {
    items = Rank.randomize(items);
    return new Rank(items);
  }

  private static randomize(items: Item[]): Item[] {
    return items;
  }
}
