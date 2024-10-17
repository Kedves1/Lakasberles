import React from "react";
import { handleLoginSubmit } from "../FormHandler";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className="text-center text-6xl">Bejelentkezés</div>
      <form
        className="flex w-full items-center gap-4 flex-col mt-10"
        action={handleLoginSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-3xl">
            Felhasználó
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Felhasználónév"
            className="w-[400px] py-5 pl-5 rounded-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-3xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Jelszó"
            className="w-[400px] py-5 pl-5 rounded-xl"
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
      <div className="absolute bottom-4 flex justify-center w-full">
        <Link href={"?forms=register"} className="text-xl">
          <button>Regisztráció</button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
