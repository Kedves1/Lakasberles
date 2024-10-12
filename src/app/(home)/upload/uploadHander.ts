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

  if (fscheck.existsSync(`./images/${session.user.uuid}`)) {
    console.log("folder already there no");
    await fs.writeFile(`./images/${session.user.uuid}/${id}.png`, buffer);
  } else {
    await fs.mkdir(`./images/${session.user.uuid}`);
    await fs.writeFile(`./images/${session.user.uuid}/${id}.png`, buffer);
  }
};
