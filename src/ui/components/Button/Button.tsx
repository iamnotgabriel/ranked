import { ReactNode } from "react";

export type Props = {
  onClick?: () => void;
  name?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
};

export function Button({ name, type = "button", children, onClick }: Props) {
  return (
    <button
      name={name}
      data-testid={name?.length > 0 ? `btn-${name}` : "btn"}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
