"use client";

import Image from "next/image";
import React, { useState } from "react";
import languange from "@/img/languange.svg";
import { cn } from "@/lib/utils";

const Languange = () => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("overflow-hidden", "pointer-events-none");
  } else {
    document.body.classList.remove("overflow-hidden", "pointer-events-none");
  }

  return (
    <>
      <button className="rounded-xl" onClick={() => setModal(!modal)}>
        <Image
          src={languange}
          alt="languange"
          width={30}
          height={30}
          className="flex-shrink-0 flex-grow-0"
        />
      </button>
      <div
        className={cn(
          "bg-black/40 w-screen h-screen top-0 left-0 scale-0 absolute z-[9999999] grid place-items-center pointer-events-auto",
          { "scale-100": modal }
        )}
        onClick={() => setModal(false)}
      >
        <div
          className={cn(
            "w-full max-w-[700px] h-full scale-0 transition-all duration-300 max-h-[500px] bg-white rounded-xl",
            { "scale-100": modal }
          )}
        ></div>
      </div>
    </>
  );
};

export default Languange;
