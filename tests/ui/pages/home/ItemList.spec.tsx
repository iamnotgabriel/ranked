import { fireEvent, render } from "@testing-library/react";
import { ItemsList } from "@/ui/pages/home/components/ItemsList";
import { Item } from "@/domain/item";

describe("ItemList", () => {
  test("list all items in input", () => {
    const items = [
      new Item("Beach"),
      new Item("Mountain"),
      new Item("Forest"),
      new Item("Grove"),
    ];

    const { getByText } = render(
      <ItemsList items={items} onDelete={() => null} />
    );

    expect(getByText("Beach")).toBeVisible();
    expect(getByText("Mountain")).toBeVisible();
    expect(getByText("Forest")).toBeVisible();
    expect(getByText("Grove")).toBeVisible();
  });

  test("delete a item of the list when delete button is clicked", () => {
    const items = [
      new Item("Beach"),
      new Item("Mountain"),
      new Item("Forest"),
      new Item("Grove"),
    ];

    const onDelete = (index: number) => {
      items.splice(index, 1);
    };
    const { queryByText, getAllByText, rerender } = render(
      <ItemsList items={items} onDelete={onDelete} />
    );
    const deleteBtns = getAllByText("X");

    fireEvent.click(deleteBtns[1]);
    rerender(<ItemsList items={items} onDelete={onDelete} />);

    expect(queryByText("Beach")).toBeVisible();
    expect(queryByText("Mountain")).toBeNull();
    expect(queryByText("Forest")).toBeVisible();
    expect(queryByText("Grove")).toBeVisible();
  });
});
