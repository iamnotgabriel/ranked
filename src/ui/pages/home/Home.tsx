import { useState } from "react";
import { PageProps } from "@/ui/pages/Router";
import { ItemsList } from "./components/ItemList/ItemsList";
import { NewItem } from "./components/NewItem";
import { Button } from "@/ui/components/Button/Button";

type Props = PageProps;
export function Home({ page }: Props) {
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
      <Button onClick={() => page.goToPage("/ranking")} />
    </>
  );
}
