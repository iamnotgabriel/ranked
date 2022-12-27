import { Button } from "@/ui/components/Button/Button";

export type Props = {
  items: string[];
  onDelete(index: number): void;
};

export function ItemsList({ items, onDelete }: Props) {
  return (
    <ul>
      {items.length > 0 &&
        items.map((item, index) => (
          <li key={index}>
            {item} <Button onClick={() => onDelete(index)}>{" X"}</Button>
          </li>
        ))}
    </ul>
  );
}
