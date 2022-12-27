import { Home } from "@/ui/pages/home/Home";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  test("renders a new input in the item list after input", async () => {
    const goToPage = jest.fn();
    const user = userEvent.setup();
    const { getByTestId, getByText } = render(<Home page={{ goToPage }} />);
    const $input = getByTestId("new-item-input");

    await user.type($input, "first item");
    fireEvent.submit($input);

    expect(getByText("first item")).toBeVisible();
  });
});
