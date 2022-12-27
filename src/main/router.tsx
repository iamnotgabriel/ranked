import { PagesIndex, Router } from "@/ui/pages/Router";
import { makeHome } from "@/main/pages/home";
import { makeRanking } from "@/main/pages/ranking";

export function RankedRouter() {
  const pages: PagesIndex = {
    "/home": { element: makeHome },
    "/ranking": { element: makeRanking },
  };
  return <Router initialPage={"/"} pages={pages} />;
}
