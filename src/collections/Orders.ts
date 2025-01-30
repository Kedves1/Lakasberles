import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    {
      required: true,
      name: "owner",
      type: "relationship",
      relationTo: "customers",
      label: "Tulajdonos",
    },
    {
      required: true,
      name: "customer",
      type: "relationship",
      relationTo: "customers",
      label: "Rendelő",
    },
    {
      required: true,
      name: "startDate",
      type: "date",
      label: "Kezdés",
    },
    {
      required: true,
      name: "endDate",
      type: "date",
      label: "Vége",
    },
    {
      required: true,
      name: "house",
      type: "relationship",
      relationTo: "houses",
      label: "Ház",
    },
    {
      required: true,
      name: "stripeId",
      type: "text",
      label: "Stripe id",
    },
  ],
}
