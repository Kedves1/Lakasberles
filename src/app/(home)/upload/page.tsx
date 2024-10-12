import React from "react";
import { handleUploadSubmit } from "./uploadHander";

const page = async () => {
  return (
    <form className="" action={handleUploadSubmit}>
      <div className="">
        <input type="file" id="imgfile" name="imgfile" required />
      </div>
      <div className="">
        <button type="submit">Feltöltés</button>
      </div>
    </form>
  );
};

export default page;
