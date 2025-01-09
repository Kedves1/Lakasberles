import { User } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <main className="w-screen h-screen pt-[120px] flex justify-center items-center">
      <div className="max-w-[1600px] flex w-full h-[70vh] rounded-xl bg-main p-10">
        <div className="basis-1/5">
          <div className="flex">
            <User/>
            <div className=""></div>
          </div>
        </div>
        <div className="basis-4/5 border-[2px] border-black/20 rounded-xl"></div>
      </div>
    </main>
  );
};

export default Settings;