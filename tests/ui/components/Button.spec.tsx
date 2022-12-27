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
    const { getByText } = render(<Button>SUBMIT</Button>);

    expect(getByText("SUBMIT")).toBeVisible();
  });

  test("data-testid contains name of button", () => {
    const { getByTestId } = render(<Button name="test">SUBMIT</Button>);

    expect(getByTestId("btn-test")).toBeVisible();
  });

  test("buttons has type button by default", () => {
    const { getByTestId } = render(<Button name="test">SUBMIT</Button>);

    expect(getByTestId("btn-test")).toHaveProperty("type", "button");
    expect(getByTestId("btn-test")).toHaveProperty("name", "test");
  });
});
