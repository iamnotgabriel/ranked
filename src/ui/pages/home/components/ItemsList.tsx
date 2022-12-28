import { Item } from "@/domain/item";
import { Button } from "@/ui/components/Button/Button";

export type Props = {
  items: Item[];
  onDelete(index: number): void;
};

export function ItemsList({ items, onDelete }: Props) {
  return (
    <ol>
      {items.length > 0 &&
        items.map((item, index) => (
          <li key={index}>
            {item.value} <Button onClick={() => onDelete(index)}>X</Button>
          </li>
        ))}
    </ol>
  );
}
