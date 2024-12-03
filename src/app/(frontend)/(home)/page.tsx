"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const loginout = async () => {
    await fetch("/api/customers/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(undefined);
    router.push("/");
  };

  const showUser = async () => {
    await fetch("/api/customers/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => (response ? response.json() : undefined))
      .then((data) => (data ? setUser(data.user) : undefined));
  };

  return (
    <div>
      <button onClick={() => loginout()}>logout</button>
      <button onClick={() => showUser()}>show user</button>
      <div>{user ? JSON.stringify(user) : "no user"}</div>
      <div>{user ? <></> : <a href="/login">login</a>}</div>
    </div>
  );
};

export default Page;
