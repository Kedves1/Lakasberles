import Link from "next/link";
import React from "react";
import { handleRegisterSubmit } from "../FormHandler";

const RegisterForm = () => {
  return (
    <>
      <div className="">regisztráció</div>
      <form className="" action={handleRegisterSubmit}>
        <div className="">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="">
          <input type="text" id="knev" name="knev" placeholder="Keresztnév" />
          <input type="text" id="vnev" name="vnev" placeholder="Vezetéknév" />
        </div>
        <div className="">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Felhasználónév"
          />
        </div>
        <div className="">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Jelszó"
          />
        </div>
        <div className="">
          <button type="submit">Regisztráció</button>
        </div>
      </form>
      <div className="">
        <Link href={"?forms=login"}>
          <button>Bejelentkezés</button>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
