import React from "react";
import { handleLoginSubmit } from "../FormHandler";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className="text-center text-6xl">Bejelentkezés</div>
      <form
        className="flex w-full max-w-[300px] mx-auto items-center gap-4 flex-col mt-10 flex-shrink-0"
        action={handleLoginSubmit}
      >
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
            className="bg-highlight border-black/20 py-3 px-5 text-2xl rounded-xl hover:bg-hover transition-all duration-75"
          >
            Bejelentkezés
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-20 w-full">
        <Link href={"?forms=register"} className="text-xl" tabIndex={-1}>
          <button className="bg-white rounded-xl py-2 px-8 text-sm  hover:bg-white/90 transition-all">
            Regisztráció
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
