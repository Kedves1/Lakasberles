import React from "react";
import { handleUploadSubmit } from "./uploadHander";

const page = async () => {
  return (
    <form className="" action={handleUploadSubmit}>
      <div className="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Listázás neve"
          required
        />
      </div>
      <div className="">
        <textarea
          name="description"
          id="description"
          placeholder="Leírás"
          required
        />
      </div>
      <div className="">
        <input
          type="checkbox"
          name="categories"
          id="categories"
          value={"Nyaraló"}
        />
        <input
          type="checkbox"
          name="categories"
          id="categories"
          value={"Lakóhalyó"}
        />
        <input
          type="checkbox"
          name="categories"
          id="categories"
          value={"Villa"}
        />
        <input
          type="checkbox"
          name="categories"
          id="categories"
          value={"Tópart"}
        />
      </div>
      <div className="">
        <input type="file" id="imgfile" name="imgfile" required multiple />
      </div>
      <div className="">
        <input type="number" id="price" name="price" required />
      </div>
      <div className="">
        <button type="submit">Feltöltés</button>
      </div>
    </form>
  );
};

export default page;
