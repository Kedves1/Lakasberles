import type { CollectionConfig } from "payload";
import { v4 as uuidv4 } from "uuid";

export const HousePics: CollectionConfig = {
  slug: "housepics",
  hooks: {
    beforeOperation: [
      ({ req, operation }) => {
        const uuid = uuidv4();
        if ((operation === "create" || operation === "update") && req.file) {
          req.file.name = `${uuid}.${req.file.mimetype.split("/")[1]}`;
        }
      },
    ],
  },

  access: {
    read: () => true,
  },
  fields: [],
  upload: true,
};
