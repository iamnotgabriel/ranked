import { render } from "@testing-library/react";
import { Ranking } from "@/ui/pages/ranking/Ranking";

describe("Ranking", () => {
  test.each([[undefined], [null]])(
    "redirect user to a list page when page.data is '%s'",
    (data) => {
      const goToPage = jest.fn();
      render(
        <Ranking
          page={{
            goToPage,
            data,
          }}
        />
      );

      expect(goToPage).toBeCalledTimes(1);
      expect(goToPage).toBeCalledWith("/");
    }
  );
});
