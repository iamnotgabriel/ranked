import { Button } from "@/ui/components/Button/Button";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export type Props = {
  onSubmit(newItem: string): void;
};

export function NewItem({ onSubmit }: Props) {
  const [newItem, setNewItem] = useState("");
  const itemForm = useRef(null as HTMLFormElement);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(newItem);
    event.currentTarget.reset();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.currentTarget.value);
  };

  return (
    <form
      data-testid="new-item-form"
      ref={itemForm}
      onSubmit={handleSubmit}
      tabIndex={0}
    >
      <input data-testid="new-item-input" type="text" onChange={handleChange} />
      <Button name="new-item" type="submit">
        SUBMIT
      </Button>
    </form>
  );
}
