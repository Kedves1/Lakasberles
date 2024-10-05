"use server";
import db from "@/database";
import { users } from "@/database/schemas/users";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { login } from "./CookieHandler";

type NewUser = typeof users.$inferInsert;
const saltRounds = 10;

export const handleLoginSubmit = async (formData: FormData) => {
  const Data = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  if (Data.username == "" || Data.password == "") return;

  const loginuser = await db
    .select()
    .from(users)
    .where(eq(users.username, Data.username));

  console.log(loginuser);
  if (loginuser.length == 0) {
    return;
  } else {
    if (bcrypt.compareSync(Data.password, loginuser[0].password)) {
      login(loginuser[0]);
      redirect("/");
    } else {
      return;
    }
  }
};

export const handleRegisterSubmit = async (formData: FormData) => {
  const Data: NewUser = {
    username: formData.get("username") as string,
    password: bcrypt.hashSync(
      formData.get("password") as string,
      bcrypt.genSaltSync(saltRounds)
    ),
    email: formData.get("email") as string,
    vezeteknev: formData.get("knev") as string,
    keresztnev: formData.get("vnev") as string,
  };

  if (
    Data.username == "" ||
    Data.password == "" ||
    Data.email == "" ||
    Data.vezeteknev == "" ||
    Data.keresztnev == ""
  )
    return;

  if (
    (await db.select().from(users).where(eq(users.username, Data.username)))
      .length == 0
  ) {
    await db.insert(users).values(Data);
    redirect("/login?forms=login");
  } else {
    return "Username is already taken!";
  }
};
