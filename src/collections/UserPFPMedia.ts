import type { CollectionConfig } from "payload";

export const UserPFPMedia: CollectionConfig = {
  slug: "pfps",
  access: {
    read: () => true,
  },
  fields: [],
  upload: true,
};
