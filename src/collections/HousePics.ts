import type { CollectionConfig } from "payload";

export const HousePics: CollectionConfig = {
  slug: "housepics",
  access: {
    read: () => true,
  },
  fields: [],
  upload: true,
};
