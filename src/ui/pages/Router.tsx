import { useState } from "react";

export type PageProps = {
  page: { goToPage: GoToPage; data?: object };
};

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

type GoToPage = (page: string, data?: object) => void;

export function Router<T extends PagesIndex>({ initialPage, pages }: Props<T>) {
  const setPage = (path: string, data?: object) =>
    pages[path]?.element({ page: { goToPage, data } }) ?? (
      <NotFound page={{ goToPage, data }} />
    );

  const goToPage: GoToPage = (path, data) => {
    return setCurrentPage(setPage(path, data));
  };

  const [currentPage, setCurrentPage] = useState<React.ReactNode>(
    setPage(initialPage)
  );

  return <> {currentPage} </>;
}

function NotFound(_: PageProps) {
  return <h1> Not found </h1>;
}
