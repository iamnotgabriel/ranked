import { ReactNode } from "react";

export type Props = {
  onClick(): void;
  children?: ReactNode;
  className?: string;
};

export function Button({ className, children, onClick }: Props) {
  return (
    <button data-testid="btn" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
