import { PageProps, PagesIndex, Router } from "@/ui/pages/Router";
import { render } from "@testing-library/react";
import { useEffect } from "react";

describe("Router", () => {
  test("renders initial page", () => {
    const pages = {
      "/": { element: () => <div data-testid="page"> A PAGE </div> },
    };
    const { getByTestId } = render(<Router initialPage={"/"} pages={pages} />);

    expect(getByTestId("page")).toHaveTextContent("A PAGE");
  });

  test("renders 'Not found'", () => {
    const pages = {};
    const { container } = render(<Router initialPage={"/"} pages={pages} />);

    expect(container).toHaveTextContent("Not found");
  });

  test("changes pages when goToPage is called", async () => {
    const pages: PagesIndex = {
      "/": {
        element: ({ page }: PageProps) => {
          useEffect(() => {
            page.goToPage("/second-page");
          }, []);
          return <> INITIAL </>;
        },
      },
      "/second-page": {
        element: (props: PageProps) => (
          <div data-testid="second-page"> SECOND </div>
        ),
      },
    };
    const { findByTestId } = render(<Router initialPage={"/"} pages={pages} />);

    expect(await findByTestId("second-page")).toHaveTextContent("SECOND");
  });

  test("changes pages with data when goToPage is called", async () => {
    const pages: PagesIndex = {
      "/": {
        element: ({ page }: PageProps) => {
          useEffect(() => {
            page.goToPage("/second-page", {
              message: "this is a message from a new page",
            });
          }, []);
          return <> INITIAL </>;
        },
      },
      "/second-page": {
        element: ({ page }: PageProps) => (
          <div data-testid="second-page"> {page.data["message"]} </div>
        ),
      },
    };
    const { findByTestId } = render(<Router initialPage={"/"} pages={pages} />);

    expect(await findByTestId("second-page")).toHaveTextContent(
      "this is a message from a new page"
    );
  });
});
