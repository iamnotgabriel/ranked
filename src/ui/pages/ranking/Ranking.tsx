import { PageProps } from "@/ui/pages/Router";
import { useEffect } from "react";

type Props = PageProps;
export function Ranking({ page }: Props) {
  useEffect(() => {
    if (page.data == undefined) {
      page.goToPage("/");
    }
  }, []);
  return <> hello fresh </>;
}
