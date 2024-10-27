"use client";
import React from "react";
import { handleLoginSubmit } from "../FormHandler";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast/use-toast";
import { siginFormSchema, signinFormFields } from "../../zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<signinFormFields>({
    resolver: zodResolver(siginFormSchema),
  });
  const HandleSignin: SubmitHandler<signinFormFields> = async (formData) => {
    const response = await handleLoginSubmit(formData);
    toast(response);
    if (response.error === "Bad login") {
      setError("email", { type: "manual" }, { shouldFocus: true });
      setError("password", { type: "manual" }, { shouldFocus: true });
      return;
    }
    router.push("/");
  };
  return (
    <>
      <div className="text-center text-5xl max-[600px]:mt-5">Bejelentkezés</div>
      <form
        className="flex w-full max-w-[300px] max-[600px]:h-[356px] mx-auto items-center gap-3 flex-col mt-10 flex-shrink-0"
        onSubmit={handleSubmit(HandleSignin)}
      >
        <div className="FormInputBlock">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={cn("FormTextInput", {
              FormTextInputError: errors.email,
              InputLoading: isSubmitting,
            })}
            disabled={isSubmitting}
            {...register("email")}
          />
          {errors.email && (
            <div className="InputErrorMessage">{errors.email.message}</div>
          )}
        </div>
        <div className="FormInputBlock">
          <input
            type="password"
            id="password"
            placeholder="Jelszó"
            className={cn("FormTextInput", {
              FormTextInputError: errors.password,
              InputLoading: isSubmitting,
            })}
            {...register("password")}
          />{" "}
          {errors.password && (
            <div className="InputErrorMessage">{errors.password.message}</div>
          )}
        </div>
        <div className="">
          <button type="submit" className="SubmitButton">
            Bejelentkezés
          </button>
        </div>
      </form>

      <div className="RedirectBlock">
        Nincs még felhasználója? Regisztráljon itt:
        <Link href={"?forms=register"} className="text-xl" tabIndex={-1}>
          <button className="RedirectButton">Regisztráció</button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
