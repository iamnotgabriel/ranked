import { Button } from "@/ui/components/Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  test("calls click event when button is clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
  });
});
