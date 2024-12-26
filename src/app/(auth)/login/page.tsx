import type { Metadata } from "next";
import { AuthForm } from "../auth-form/AuthForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="max-h-screen flex items-center justify-center">
      <AuthForm isLogin />
    </div>
  );
}
