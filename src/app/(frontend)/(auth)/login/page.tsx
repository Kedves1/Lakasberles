"use client";

import { useRouter, useSearchParams } from "next/navigation";
import AuthInput from "../components/AuthInput";
import Link from "next/link";
import AuthSubmit from "../components/AuthSubmit";
import { useToast } from "../../components/ui/use-toast";
import { siginFormSchema, signinFormFields } from "../zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<signinFormFields>({
    resolver: zodResolver(siginFormSchema),
  });
  const login: SubmitHandler<signinFormFields> = async (formData) => {
    const Data = {
      email: formData.email,
      password: formData.password,
    };
    const response = await fetch("/api/customers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Data.email as string,
        password: Data.password as string,
      }),
    });
    const data = await response.json();

    if (data.errors) {
      setError("email", { type: "manual" }, { shouldFocus: true });
      setError("password", { type: "manual" }, { shouldFocus: true });
      return toast({
        title: "Hiba",
        description: "Hibás felhasználónév vagy jelszó!",
        variant: "destructive",
        duration: 3000,
      });
    }

    toast({
      title: `${Data.email}`,
      description: "Sikeres bejelentkezés 🎉",
      variant: "signin",
      duration: 3000,
    });

    router.push(redirectPath);
  };

  return (
    <div className="px-20 w-full h-full pt-10 pb-3">
      <div className="text-5xl text-center mb-10">Bejelentkezés</div>
      <form onSubmit={handleSubmit(login)}>
        <AuthInput
          label="Email"
          id="email"
          type="email"
          className="mb-1"
          error={errors.email}
          {...register("email")}
        />
        <AuthInput
          label="Jelszó"
          id="password"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <AuthSubmit className="ml-auto" />
      </form>
      <div className="text-center text-lg mt-20">
        Még nincs fiókod?{" "}
        <Link
          className="text-highlight cursor-pointer hover:text-hover transition-all duration-75"
          href="/register"
        >
          Regisztráció
        </Link>
      </div>
    </div>
  );
};

export default Page;
