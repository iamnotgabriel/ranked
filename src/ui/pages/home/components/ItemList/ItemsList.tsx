import { Button } from "@/ui/components/Button";
import styles from "@/ui/pages/home/components/ItemList/styles.scss";

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
            {item}{" "}
            <Button className={styles.delete} onClick={() => onDelete(index)}>
              {" "}
              {" X"}
            </Button>
          </li>
        ))}
    </ul>
  );
}
