import type { CollectionConfig } from "payload";

export const Customers: CollectionConfig = {
  slug: "customers",
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
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
      relationTo: "pfps",
      saveToJWT: true,
      label: "Profilkép",
      defaultValue: "67536806445043955c436999",
    },
  ],
};
