import { Button } from "@/ui/components/Button/Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button", () => {
  test("calls click event when button is clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick} />);

    fireEvent.click(getByTestId("btn"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("renders children inside button", () => {
    const { getByText } = render(<Button onClick={() => null}>SUBMIT</Button>);

    expect(getByText("SUBMIT")).toBeVisible();
  });

  test("", () => {
    const { getByText } = render(
      <Button className="hello" onClick={() => null}>
        SUBMIT
      </Button>
    );

    expect(getByText("SUBMIT")).toBeVisible();
  });
});
