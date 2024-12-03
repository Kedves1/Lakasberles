"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const login = async () => {
    const response = await fetch("/api/customers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "kedves.doggo@gmail.com",
        password: "ehe",
      }),
    });
    router.push("/");
  };

  return (
    <div>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default Page;
