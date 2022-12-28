import { Rank } from "@/domain/rank";
import { Item } from "@/domain/item";

describe("ranking", () => {
  test("Rank randomizes item list", () => {
    const items = [
      new Item("Goodfellas"),
      new Item("Godfather"),
      new Item("Irishman"),
      new Item("Public Enemies"),
      new Item("The Departed"),
    ];

    const rank = Rank.from(items);

    expect(rank.items).not.toEqual(items);
  });

  test("battle pushes looser to eliminated array and removes from the items array", () => {
    const items = [
      new Item("Goodfellas"),
      new Item("Godfather"),
      new Item("Public Enemies"),
    ];
    const rank = Rank.from(items);

    rank.battle(items[0], items[1]);

    expect(rank.eliminated).toContain(items[1]);
    expect(rank.items).not.toContain(items[1]);
  });

  test("battle add won to winner and loss to looser", () => {
    const items = [
      new Item("Goodfellas"),
      new Item("Godfather"),
      new Item("Public Enemies"),
    ];
    const rank = Rank.from(items);

    rank.battle(items[0], items[1]);

    expect(items[0].victories).toContain(items[1]);
    expect(items[1].losses).toContain(items[0]);
  });

  test("should throw error when battle an unknown item", () => {
    const unknown = new Item("Public Enemies");
    const items = [new Item("Goodfellas"), new Item("Godfather")];
    const rank = Rank.from(items);

    expect(() => rank.battle(items[0], unknown)).toThrow(
      "Battle with an unknown looser 'Public Enemies'"
    );
    expect(() => rank.battle(unknown, items[0])).toThrow(
      "Battle with an unknown winner 'Public Enemies'"
    );

    expect(rank.items).toHaveLength(2);
    expect(rank.eliminated).toHaveLength(0);
  });
});
