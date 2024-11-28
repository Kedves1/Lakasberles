"use client";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleRegisterSubmit } from "../FormHandler";
import { useToast } from "./Toast/use-toast";
import { registerFormSchema, registerFormFields } from "../../zod";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const RegisterForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<registerFormFields>({
    resolver: zodResolver(registerFormSchema),
  });

  const HandleRegister: SubmitHandler<registerFormFields> = async (
    formData
  ) => {
    const response = await handleRegisterSubmit(formData);
    toast(response);
    if (response.error === "Email taken") {
      setError("email", { type: "manual" }, { shouldFocus: true });
      return;
    }
    router.push("/login");
  };

  return (
    <>
      <div className="text-center text-5xl max-[600px]:mt-5">Regisztráció</div>
      <form
        className="flex w-full max-w-[400px] max-[700px]:px-6 mx-auto items-center  flex-col max-[600px]:mt-10 mt-12 flex-shrink-0"
        onSubmit={handleSubmit(HandleRegister)}
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

        <div className="flex gap-4">
          <div className="FormInputBlock">
            <input
              type="text"
              id="knev"
              placeholder="Keresztnév"
              className={cn("FormTextInput", {
                FormTextInputError: errors.lastname,
                InputLoading: isSubmitting,
              })}
              disabled={isSubmitting}
              {...register("lastname")}
            />
            {errors.lastname && (
              <div className="InputErrorMessage">{errors.lastname.message}</div>
            )}
          </div>
          <div className="FormInputBlock">
            <input
              type="text"
              id="vnev"
              placeholder="Vezetéknév"
              className={cn("FormTextInput", {
                FormTextInputError: errors.firstname,
                InputLoading: isSubmitting,
              })}
              disabled={isSubmitting}
              {...register("firstname")}
            />
            {errors.firstname && (
              <div className="InputErrorMessage">
                {errors.firstname.message}
              </div>
            )}
          </div>
        </div>
        <div className="FormInputBlock">
          <input
            type="text"
            id="username"
            placeholder="Felhasználónév"
            className={cn("FormTextInput", {
              FormTextInputError: errors.username,
              InputLoading: isSubmitting,
            })}
            disabled={isSubmitting}
            {...register("username")}
          />
          {errors.username && (
            <div className="InputErrorMessage">{errors.username.message}</div>
          )}
        </div>
        <div className="FormInputBlock !pb-12">
          <input
            type="password"
            id="password"
            placeholder="Jelszó"
            className={cn("FormTextInput", {
              FormTextInputError: errors.password,
              InputLoading: isSubmitting,
            })}
            disabled={isSubmitting}
            {...register("password")}
          />
          {errors.password && (
            <div className="InputErrorMessage h-[49px]">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="">
          <button
            type="submit"
            className={cn("SubmitButton", { "!bg-slate-300": isSubmitting })}
            disabled={isSubmitting}
          >
            Regisztráció
          </button>
        </div>
      </form>

      <div className="RedirectBlock">
        Van már felhasználója? Jelentkezzen be itt:
        <Link href={"?forms=login"} className="text-xl" tabIndex={-1}>
          <button className="RedirectButton">Bejelentkezés</button>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
