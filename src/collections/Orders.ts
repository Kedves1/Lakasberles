import type { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "stripeId",
    defaultColumns: ["stripeId", "customer", "status", "startDate", "endDate"],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "owner",
      type: "relationship",
      relationTo: "customers",
      required: true,
      label: "Tulajdonos",
    },
    {
      name: "customer",
      type: "relationship",
      relationTo: "customers",
      required: true,
      label: "Rendelő",
    },
    {
      name: "house",
      type: "relationship",
      relationTo: "houses",
      required: true,
      label: "Ház",
    },
    {
      name: "startDate",
      type: "date",
      required: true,
      label: "Kezdés",
    },
    {
      name: "endDate",
      type: "date",
      required: true,
      label: "Vége",
    },
    {
      name: "stripeId",
      type: "text",
      required: true,
      unique: true,
      label: "Stripe ID",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        {
          label: "Aktív",
          value: "active",
        },
        {
          label: "Törölt",
          value: "cancelled",
        },
      ],
    },
  ],
};
