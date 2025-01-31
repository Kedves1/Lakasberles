import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Houses: CollectionConfig = {
  slug: "houses",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "housepics",
      type: "array",
      fields: [
        {
          type: "upload",
          name: "pictures",
          relationTo: "housepics",
          label: "Ház képei",
          required: true,
        },
      ],
    },
    {
      type: "text",
      required: true,
      name: "name",
      label: "Lakás neve",
    },
    {
      required: true,
      name: "owner",
      type: "relationship",
      relationTo: "customers",
      label: "Tulajdonos",
    },
    {
      name: "description",
      type: "richText",
      label: "Leírás",
      required: true,
      editor: lexicalEditor({}),
    },
    {
      type: "number",
      name: "roomnum",
      label: "Szoba szám",
      required: true,
    },
    {
      type: "number",
      name: "bathnum",
      label: "FürdőSzoba szám",
      required: true,
    },
    {
      type: "point",
      name: "location",
      label: "Hely",
      required: true,
    },
    {
      type: "number",
      name: "price",
      label: "Ár",
      required: true,
    },
    {
      type: "number",
      name: "rating",
      label: "Értékelés",
      required: true,
      min: 0,
      max: 5,
    },
    {
      type: "checkbox",
      name: "inuse",
      label: "Használatban",
    },
    {
      type: "select",
      name: "categories",
      label: "Kategóriák",
      required: true,
      options: [
        {
          label: "Villa",
          value: "mansion",
        },
        {
          label: "Tóparti",
          value: "pondside",
        },
      ],
    },
    {
      type: "checkbox",
      name: "popular",
      label: "Népszerű",
    },
    {
      type: "checkbox",
      name: "ventelation",
      label: "Klíma",
    },
    {
      type: "checkbox",
      name: "spotlight",
      label: "Kiemelt",
    },
    {
      type: "select",
      name: "country",
      label: "ország",
      options: [
        {
          label: "Magyarország",
          value: "Magyarország",
        },
      ],
    },
    {
      type: "json",
      name: "reviews",
      label: "Vélemények",
    },
  ],
};
