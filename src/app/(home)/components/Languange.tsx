"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import languange from "@/img/languange.svg";

const Languange = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button className="rounded-xl" onClick={() => setModal(true)}>
        <Image
          src={languange}
          alt="languange"
          width={30}
          height={30}
          className="flex-shrink-0 flex-grow-0"
        />
      </button>
      <dialog
        className="w-full z-50 max-w-[700px] h-full absolute top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%] max-h-[500px] bg-white"
        open={modal}
      >
        Languange
        <button onClick={() => setModal(false)}>Close</button>
      </dialog>
    </>
  );
};

export default Languange;
