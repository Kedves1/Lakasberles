"use server";
import db from "@/database";
import { users } from "@/database/schemas/users";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { login } from "./CookieHandler";
import { randomUUID } from "crypto";
import { Toast } from "./components/Toast/use-toast";
import {
  registerFormSchema,
  type signinFormFields,
  type registerFormFields,
  siginFormSchema,
} from "../zod";
import { ZodError, ZodIssue } from "zod";
import { redirect } from "next/navigation";
type NewUser = typeof users.$inferInsert;
const saltRounds = 10;

export const handleLoginSubmit = async (
  formData: signinFormFields
): Promise<ErredToast> => {
  const Data = {
    email: formData.email,
    password: formData.password,
  };

  try {
    siginFormSchema.parse(Data);
  } catch (error) {
    return {
      title: "Hiba!",
      description: `${(error as ZodError).issues[0].message}`,
      variant: "destructive",
      error: (error as ZodError).issues[0],
    };
  }

  const loginuser = await db
    .select()
    .from(users)
    .where(eq(users.email, Data.email));

  if (loginuser.length == 0) {
    return {
      title: "Hiba!",
      description: "Hibás email vagy jelszó",
      variant: "destructive",
      error: "Bad login",
    };
  } else {
    if (bcrypt.compareSync(Data.password, loginuser[0].password)) {
      await login(loginuser[0]);
      redirect("/");
      return {
        title: "Siker!",
        description: `Sikeres bejelentkezés ${loginuser[0].username}`,
        variant: "signin",
      };
    } else {
      return {
        title: "Hiba!",
        description: "Hibás email vagy jelszó",
        variant: "destructive",
        error: "Bad login",
      };
    }
  }
};

interface ErredToast extends Toast {
  error?: ZodIssue | string;
}

export const handleRegisterSubmit = async (
  formData: registerFormFields
): Promise<ErredToast> => {
  const Data: NewUser = {
    username: formData.username,
    password: bcrypt.hashSync(
      formData.password,
      bcrypt.genSaltSync(saltRounds)
    ),
    email: formData.email,
    firstname: formData.lastname,
    lastname: formData.firstname,
    uuid: randomUUID(),
  };
  try {
    registerFormSchema.parse(Data);
  } catch (error) {
    return {
      title: "Hiba!",
      description: `${(error as ZodError).issues[0].message}`,
      variant: "destructive",
      error: (error as ZodError).issues[0],
    };
  }

  if (
    (await db.select().from(users).where(eq(users.email, Data.email))).length ==
    0
  ) {
    await db.insert(users).values(Data);
    return {
      title: "Siker!",
      description: `Sikerült a regisztráció ${Data.email} email címen`,
    };
  } else {
    return {
      title: "Hiba!",
      description: `Ez az email cím már használva van!`,
      variant: "destructive",
      error: "Email taken",
    };
  }
};
