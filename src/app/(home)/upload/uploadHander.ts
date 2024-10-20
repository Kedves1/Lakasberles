"use server";
import fs from "node:fs/promises";
import fscheck from "node:fs";
import { randomUUID } from "crypto";
import { getSession } from "@/app/(auth)/login/CookieHandler";

export const handleUploadSubmit = async (formData: FormData) => {
  const session = await getSession();
  const id = randomUUID();
  const imgfile = formData.get("imgfile") as File;

  const arrayBuffer = await imgfile.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const dirPath = "./src/app/image/assets/";

  if (fscheck.existsSync(`${dirPath}${session.user.uuid}`)) {
    console.log("folder already there no");
    await fs.writeFile(`${dirPath}${session.user.uuid}/${id}.png`, buffer);
  } else {
    await fs.mkdir(`${dirPath}${session.user.uuid}`);
    await fs.writeFile(`${dirPath}${session.user.uuid}/${id}.png`, buffer);
  }
};
