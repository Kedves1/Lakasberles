import Link from "next/link";
import React from "react";
import { handleRegisterSubmit } from "../FormHandler";

const RegisterForm = () => {
  return (
    <>
      <div className="text-center text-5xl">Regisztráció</div>
      <form
        className="flex w-full max-w-[400px] mx-auto items-center gap-2 flex-col mt-10 flex-shrink-0"
        action={handleRegisterSubmit}
      >
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="username" className="text-3xl ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="text-xl w-full py-3 pl-5 rounded-xl"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="username" className="text-3xl ">
              Keresztnév
            </label>
            <input
              type="text"
              id="knev"
              name="knev"
              placeholder="Keresztnév"
              className="text-xl w-full py-3 pl-5 rounded-xl"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="Email" className="text-3xl ">
              Vezetéknév
            </label>
            <input
              type="text"
              id="vnev"
              name="vnev"
              placeholder="Vezetéknév"
              className="text-xl w-full py-3 pl-5 rounded-xl"
              required
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="username" className="text-3xl ">
            Felhasználónév
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Felhasználónév"
            className="text-xl w-full py-3 pl-5 rounded-xl"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="password" className="text-3xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Jelszó"
            className="text-xl w-full py-3 pl-5 rounded-xl"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-highlight border-black/20 py-3 px-5 text-2xl rounded-xl hover:bg-hover transition-all mt-3 duration-75"
          >
            Regisztráció
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-10 w-full">
        <Link href={"?forms=login"} className="text-xl" tabIndex={-1}>
          <button className="bg-white rounded-xl py-2 px-8 text-sm hover:bg-white/90 transition-all">
            Bejelentkezés
          </button>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
