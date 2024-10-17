import Link from "next/link";
import React from "react";
import { handleRegisterSubmit } from "../FormHandler";

const RegisterForm = () => {
  return (
    <>
      <div className="text-center text-6xl">Regisztráció</div>
      <form
        className="flex w-full items-center gap-4 flex-col mt-10"
        action={handleRegisterSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-3xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="knev" className="text-3xl">
              Keresztnév
            </label>
            <input
              type="text"
              id="knev"
              name="knev"
              placeholder="Keresztnév"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="vnev" className="text-3xl">
              Vezetéknév
            </label>
            <input
              type="text"
              id="vnev"
              name="vnev"
              placeholder="Vezetéknév"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-3xl">
            Felhasználónév
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Felhasználónév"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passoword" className="text-3xl">
            Jelszó
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Jelszó"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-highlight border-black/20 py-3 px-5 text-2xl rounded-xl hover:bg-hover transition-all duration-75"
          >
            Regisztráció
          </button>
        </div>
      </form>
      <div className="absolute bottom-4 flex justify-center w-full">
        <Link href={"?forms=login"} className="text-xl">
          <button>Bejelentkezés</button>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
