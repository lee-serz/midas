"use client";

import clsx from "clsx";
import styles from "./AuthForm.module.scss";
import { AuthToggle } from "./AuthToggle";
import { SocialMediaButtons } from "./SocialMediaButtons";
import { useAuthForm } from "./useAuthForm";
import { ErrorMessage } from "@/errors/errorMessage";
import { useTheme } from "next-themes";

interface AuthFormProps {
  isLogin: boolean;
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { handleSubmit, isLoading, onSubmit, register, formState } =
    useAuthForm(isLogin);

  const passwordError = formState.errors["password"]?.message;
  const emailError = formState.errors["email"]?.message;

  const { theme } = useTheme();
  console.log(theme);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full bg-midground py-5 px-10 rounded flex flex-col gap-5"
    >
      <div className="font-bold">
        {isLogin ? <h2>Вход</h2> : <h2>Регистрация</h2>}
      </div>

      <div>
        <label>Почта</label>
        <input
          type="email"
          placeholder=""
          {...register("email", {
            required: "Обязательно для заполнения",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Введите корректный адрес электронной почты",
            },
          })}
          className={clsx(
            styles["input-field"],
            "w-full p-2  rounded focus:outline-none focus:border-indigo-500"
          )}
        />
        <ErrorMessage message={emailError} />
      </div>

      <div>
        <label>Пароль</label>
        <input
          type="password"
          placeholder=""
          {...register("password", {
            required: "Обязательно для заполнения",
            minLength: {
              value: 6,
              message: "Пароль должен содержать минимум 6 символов",
            },
          })}
          className={clsx(
            styles["input-field"],
            "w-full p-2  rounded focus:outline-none focus:border-indigo-500"
          )}
        />
        <ErrorMessage message={passwordError} />
      </div>

      <button
        type="submit"
        className={clsx(
          styles["btn-primary"],
          isLoading ? "opacity-75 cursor-not-allowed" : "",
          "bg-accent text-white p-2 rounded hover:bg-background"
        )}
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : isLogin ? "Войти" : "Зарегистрироваться"}
      </button>

      <SocialMediaButtons />

      <AuthToggle isLogin={isLogin} />
    </form>
  );
}
