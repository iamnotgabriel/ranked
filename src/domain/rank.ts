import { Item } from "@/domain/item";

export class Rank {
  private constructor(private readonly items: Item[]) {}

  static from(items: Item[]): Rank {
    items = Rank.randomize(items);
    return new Rank(items);
  }

  private static randomize(items: Item[]): Item[] {
    return items;
  }
}
