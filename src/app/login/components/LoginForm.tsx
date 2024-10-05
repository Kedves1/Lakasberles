import React from "react";
import { handleLoginSubmit } from "../FormHandler";
import Link from "next/link";
const LoginForm = () => {
  return (
    <>
      <div className="">Bejelentkezés</div>
      <form className="" action={handleLoginSubmit}>
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
          <button type="submit">Bejelentkezés</button>
        </div>
      </form>
      <div className="">
        <Link href={"?forms=register"}>
          <button>Regisztráció</button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
