import type { CollectionConfig } from "payload";

export const Customers: CollectionConfig = {
  slug: "customers",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      type: "text",
      required: true,
      name: "username",
      saveToJWT: true,
      label: "Felhasználónév",
    },
    {
      required: true,
      type: "text",
      name: "firstname",
      saveToJWT: true,
      label: "Keresztnév",
    },
    {
      type: "text",
      required: true,
      name: "lastname",
      saveToJWT: true,
      label: "Vezetéknév",
    },
    {
      type: "upload",
      name: "picture",
      relationTo: "media",
      saveToJWT: true,
      label: "Profilkép",
    },
  ],
};
