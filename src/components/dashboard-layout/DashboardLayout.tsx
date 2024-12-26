import type { PropsWithChildren } from "react";

import { Header } from "./header/Header";
import "./dashboard.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-full ">
      <main className="flex flex-col px-5 overflow-x-hidden relative gap-5 content__container dashboard__scrollbar">
        <Header />
        {children}
      </main>
    </div>
  );
}
