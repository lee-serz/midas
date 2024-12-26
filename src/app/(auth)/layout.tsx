import { ADMIN_PAGES } from "@/config/pages/admin.config";
import { AUTH_PAGES } from "@/config/pages/auth.config";
import { getServerAuth } from "@/utils/server/get-server-auth";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export default async function AuthLayout({
  children,
}: PropsWithChildren<unknown>) {
  const user = await getServerAuth();

  if (user?.isLoggedIn)
    return redirect(user.isAdmin ? ADMIN_PAGES.HOME : AUTH_PAGES.HOME);

  return children;
}
