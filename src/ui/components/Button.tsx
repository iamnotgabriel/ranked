import { ReactNode } from "react";

export type Props = {
  onClick(): void;
  children?: ReactNode;
  className?: string;
};

export function Button({ className, children, onClick }: Props) {
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
}
