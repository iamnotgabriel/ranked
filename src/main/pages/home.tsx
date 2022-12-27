import React from "react";
import { Home } from "@/ui/pages/home/Home";
import { PageProps } from "@/ui/pages/Router";

export function makeHome(props: PageProps) {
  return <Home {...props} />;
}
