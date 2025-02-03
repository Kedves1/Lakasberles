"use client";

import { useRouter } from "next/navigation";
import AuthInput from "../components/AuthInput";
import Link from "next/link";
import AuthSubmit from "../components/AuthSubmit";
import { registerFormSchema, registerFormFields } from "../../zod";
import { useToast } from "../../components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
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
  const registerCustomer: SubmitHandler<registerFormFields> = async (
    formData
  ) => {
    const Data = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
      firstName: formData.firstname,
      lastName: formData.lastname,
    };

    const response = await fetch("/api/customers", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: Data.username,
        email: Data.email,
        password: Data.password,
        firstname: Data.firstName,
        lastname: Data.lastName,
      }),
    });
    const data = await response.json();

    if (data.errors) {
      setError("email", { type: "manual" }, { shouldFocus: true });
      return toast({
        title: "Hiba",
        description: "Hibás felhasználónév vagy jelszó!",
        variant: "destructive",
        duration: 3000,
      });
    }

    toast({
      title: `${Data.email}`,
      description: "Sikeres regisztráció 🎉",
      variant: "default",
      duration: 3000,
    });
    router.push("/login");
  };

  return (
    <div className="px-20 w-full h-full pt-10 pb-3">
      <div className="text-5xl text-center mb-10">Regisztráció</div>
      <form onSubmit={handleSubmit(registerCustomer)}>
        <AuthInput
          label="Email"
          id="email"
          type="email"
          className="mb-1"
          error={errors.email}
          disabled={isSubmitting}
          {...register("email")}
        />
        <AuthInput
          label="Felhasználónév"
          id="username"
          type="text"
          className="mb-1"
          error={errors.username}
          disabled={isSubmitting}
          {...register("username")}
        />
        <div className="flex mb-1 gap-3">
          <AuthInput
            label="Vezetéknév"
            id="lastName"
            type="text"
            error={errors.lastname}
            disabled={isSubmitting}
            {...register("lastname")}
          />
          <AuthInput
            label="Keresztnév"
            id="firstName"
            type="text"
            error={errors.firstname}
            disabled={isSubmitting}
            {...register("firstname")}
          />
        </div>
        <AuthInput
          label="Jelszó"
          id="password"
          type="password"
          error={errors.password}
          disabled={isSubmitting}
          {...register("password")}
        />
        <AuthSubmit className="ml-auto" disabled={isSubmitting} />
      </form>
      <div className="text-center text-lg mt-20">
        Van már fiókod?{" "}
        <Link
          className="text-highlight cursor-pointer hover:text-hover transition-all duration-75"
          href="/login"
        >
          Bejelentkezés
        </Link>
      </div>
    </div>
  );
};

export default Page;
