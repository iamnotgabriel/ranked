import { useState } from "react";
import { PageProps } from "@/ui/pages/Router";
import { ItemsList } from "@/ui/pages/home/components/ItemsList";
import { NewItem } from "@/ui/pages/home/components/NewItem";
import { Button } from "@/ui/components/Button/Button";
import { Item } from "@/domain/item";

type Props = PageProps;
export function Home({ page }: Props) {
  const [items, setItems] = useState([] as Item[]);
  const onNewItemSubmit = (newItem: string) => {
    setItems([...items, new Item(newItem)]);
  };

  const onDelete = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  return (
    <>
      <NewItem onSubmit={onNewItemSubmit} />
      <ItemsList items={items} onDelete={onDelete} />
      <Button onClick={() => page.goToPage("/ranking")} />
    </>
  );
}
