// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { UserPFPMedia } from "./collections/UserPFPMedia";
import { Customers } from "./collections/Customers";
import { HousePics } from "./collections/HousePics";
import { Houses } from "./collections/Houses";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, UserPFPMedia, Customers, HousePics, Houses],
  editor: lexicalEditor(),
  serverURL: process.env.SERVER_URL,
  csrf: [process.env.SERVER_URL || "https://berles.gemes.eu"],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
});
