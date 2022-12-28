import { Item } from "@/domain/item";

describe("Item", () => {
  test("compare with the same item returns 0", () => {
    const item = new Item("Brazil");
    const otherItem = new Item("Brazil");

    expect(item.compare(item)).toEqual(0);
    expect(item.compare(otherItem)).toEqual(0);
  });

  test("compare with item won returns 1", () => {
    const item = new Item("Brazil");
    const otherItem = new Item("Swiss");

    item.won(otherItem);

    expect(item.compare(otherItem)).toEqual(1);
  });

  test("compare with item loose returns -1", () => {
    const item = new Item("Brazil");
    const otherItem = new Item("Croatia");
    item.loss(otherItem);

    expect(item.compare(otherItem)).toEqual(-1);
  });

  test("compare with item loose returns undefined", () => {
    const item = new Item("Brazil");
    const otherItem = new Item("England");

    expect(item.compare(otherItem)).toEqual(undefined);
  });
});
