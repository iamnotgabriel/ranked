import { useState } from "react";
import { ItemsList } from "./components/ItemList/ItemsList";
import { NewItem } from "./components/NewItem";

export function Home() {
  const [items, setItems] = useState([] as string[]);
  const onNewItemSubmit = (newItem: string) => {
    setItems([...items, newItem]);
  };

  const onDelete = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  return (
    <>
      <NewItem onSubmit={onNewItemSubmit} />
      <ItemsList items={items} onDelete={onDelete} />
    </>
  );
}
