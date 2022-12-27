import { useState } from "react";

export type PageProps = { page: { goToPage: GoToPage } };

type PageRoute = {
  element: (props: PageProps) => React.ReactNode;
};

export type PagesIndex = {
  [path: string]: PageRoute;
};

type Props<T extends PagesIndex> = {
  initialPage: string;
  pages: T;
};

type GoToPage = (page: string) => void;

export function Router<T extends PagesIndex>({ initialPage, pages }: Props<T>) {
  const setPage = (path: string) =>
    pages[path]?.element({ page: { goToPage } }) ?? (
      <NotFound page={{ goToPage }} />
    );
  const goToPage: GoToPage = (path: string) => {
    return setCurrentPage(setPage(path));
  };
  const [currentPage, setCurrentPage] = useState<React.ReactNode>(
    setPage(initialPage)
  );

  return <> {currentPage} </>;
}

function NotFound(_: PageProps) {
  return <h1> Not found </h1>;
}
