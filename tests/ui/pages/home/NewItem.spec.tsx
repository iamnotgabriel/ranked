import {
  createEvent,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { NewItem } from "@/ui/pages/home/components/NewItem";
import userEvent from "@testing-library/user-event";

describe("NewItem", () => {
  test("call onSubmit with 'Beach' when submit is clicked", async () => {
    const onSubmit = jest.fn();
    const user = userEvent.setup();
    const { getByTestId, queryByDisplayValue } = render(
      <NewItem onSubmit={onSubmit} />
    );
    const $input = getByTestId("new-item-input");
    const $submit = getByTestId("new-item-submit");

    await user.type($input, "Beach");
    await user.click($submit);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toHaveBeenNthCalledWith(1, "Beach");
    expect(queryByDisplayValue("Beach")).not.toBeInTheDocument();
  });

  test("call onSubmit when enter is pressed in the input field", async () => {
    const onSubmit = jest.fn();
    const user = userEvent.setup();
    const { getByTestId } = render(<NewItem onSubmit={onSubmit} />);
    const $input = getByTestId("new-item-input");

    await user.type($input, "Beach");
    fireEvent.submit($input);

    await waitFor(() => expect(onSubmit).toBeCalledTimes(1));
    expect(onSubmit).toHaveBeenNthCalledWith(1, "Beach");
  });

  test("prevent default action when form is submitted", async () => {
    const onSubmit = jest.fn();
    const user = userEvent.setup();
    const { getByTestId } = render(<NewItem onSubmit={onSubmit} />);
    const $input = getByTestId("new-item-input");
    const submitEvent = createEvent.submit($input);

    await user.type($input, "Beach");
    fireEvent($input, submitEvent);

    await waitFor(() => expect(onSubmit).toBeCalledTimes(1));
    expect(submitEvent.defaultPrevented).toBeTruthy();
  });
});
