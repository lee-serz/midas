import type { Metadata } from "next";
import { AuthForm } from "../auth-form/AuthForm";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="max-h-screen flex items-center justify-center">
      <AuthForm isLogin={false} />
    </div>
  );
}
