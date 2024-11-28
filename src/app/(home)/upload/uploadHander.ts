"use server";
import fs from "node:fs/promises";
import fscheck from "node:fs";
import { randomUUID } from "crypto";
import { getSession } from "@/app/(auth)/login/CookieHandler";
import db from "@/database";
import { houses } from "@/database/schemas/houses";

export const handleUploadSubmit = async (formData: FormData) => {
  const session = await getSession();
  const imgfiles = formData.getAll("imgfile") as File[];
  const name = formData.get("name") as string;
  const description = formData.get("description");
  const categories = formData.getAll("categories");
  const houseId = randomUUID();
  const price = formData.get("price");

  const images: string[] = [];

  const writeImages = () => {
    return new Promise<void>((resolve) => {
      imgfiles.map(async (imgfile) => {
        const arrayBuffer = await imgfile.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const id = randomUUID();

        const dirPath = "./src/app/image/assets/";

        if (fscheck.existsSync(`${dirPath}${session.user.uuid}`)) {
          await fs.writeFile(
            `${dirPath}${session.user.uuid}/${id}.png`,
            buffer
          );
        } else {
          await fs.mkdir(`${dirPath}${session.user.uuid}`);
          await fs.writeFile(
            `${dirPath}${session.user.uuid}/${id}.png`,
            buffer
          );
        }

        images.push(`${id}.png`);

        if (images.length == imgfiles.length) {
          resolve();
        }
      });
    });
  };
  await writeImages();
  await db.insert(houses).values({
    name: name as string,
    uuid: houseId as string,
    image: (images! as string[]).join(";") as string,
    description: description as string,
    owner: session.user.username as string,
    owner_uuid: session.user.uuid as string,
    coords: "idkyetlol",
    price: price?.toString() as string,
    inUse: 0,
    category: categories.join(";") as string,
    popular: 0,
    sponsored: 0,
  });
};
