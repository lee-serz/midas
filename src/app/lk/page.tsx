import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants";

export const metadata: Metadata = {
  title: "Home page",
  ...NO_INDEX_PAGE,
};

export default function HomePage() {
  return <div>MIDAS</div>;
}
