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
      type: "text",
      label: "Leírás",
      required: true,
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
      type: "number",
      name: "price",
      label: "Ár",
      required: true,
    },
    {
      type: "number",
      name: "rating",
      label: "Értékelés",
      defaultValue: 0,
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
      name: "category",
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
        {
          label: "Nyaralók",
          value: "holiday",
        },
        {
          label: "Apartmanok",
          value: "apartment",
        },
        {
          label: "Tengerparti házak",
          value: "beachhouse",
        },
        {
          label: "Hegyi kunyhók",
          value: "mountaincabin",
        },
        {
          label: "Farmházak",
          value: "farmhouse",
        },
        {
          label: "Lombházak",
          value: "treehouse",
        },
        {
          label: "Kastélyok",
          value: "palace",
        },
        {
          label: "Kupolaházak",
          value: "domehouse",
        },
        {
          label: "Kükládi stílus",
          value: "Cycladesstyle",
        },
        {
          label: "Háromszög házak",
          value: "trianglehouse",
        },
        {
          label: "Pályaszállások",
          value: "skihouse",
        },
        {
          label: "Tópart",
          value: "pond",
        },
        {
          label: "Villák",
          value: "mansion",
        },
        {
          label: "Gyönyörű kilátás",
          value: "beautifulview",
        },
        {
          label: "Lakóhajók",
          value: "boathouse",
        },
        {
          label: "Barlangházak",
          value: "cavehouse",
        },
        {
          label: "Üvegházak",
          value: "glasshouse",
        },
        {
          label: "Földházak",
          value: "earthhouse",
        },
        {
          label: "Konténerházak",
          value: "containerhouse",
        },
        {
          label: "Luxury villák",
          value: "luxuryvilla",
        },
        {
          label: "Sivatagi oázis",
          value: "desertoasis",
        },
        {
          label: "Tetőtéri lakások",
          value: "penthouse",
        },
        {
          label: "Történelmi házak",
          value: "historichome",
        },
        {
          label: "Jurták",
          value: "yurt",
        },
        {
          label: "Szigeti házak",
          value: "islandhouse",
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
          label: "Németország",
          value: "germany",
        },
        {
          label: "Franciaország",
          value: "france",
        },
        {
          label: "Spanyolország",
          value: "spain",
        },
        {
          label: "Magyarország",
          value: "hungary",
        },
        {
          label: "Egyesült Királyság",
          value: "uk",
        },
        {
          label: "Olaszország",
          value: "italy",
        },
        {
          label: "Hollandia",
          value: "netherlands",
        },
        {
          label: "Belgium",
          value: "belgium",
        },
        {
          label: "Ausztria",
          value: "austria",
        },
        {
          label: "Svédország",
          value: "sweden",
        },
        {
          label: "Lengyelország",
          value: "poland",
        },
        {
          label: "Portugália",
          value: "portugal",
        },
        {
          label: "Görögország",
          value: "greece",
        },
        {
          label: "Csehország",
          value: "czech_republic",
        },
        {
          label: "Finnország",
          value: "finland",
        },
        {
          label: "Írország",
          value: "ireland",
        },
        {
          label: "Dánia",
          value: "denmark",
        },
        {
          label: "Románia",
          value: "romania",
        },
        {
          label: "Bulgária",
          value: "bulgaria",
        },
        {
          label: "Horvátország",
          value: "croatia",
        },
        {
          label: "Szlovákia",
          value: "slovakia",
        },
        {
          label: "Szlovénia",
          value: "slovenia",
        },
        {
          label: "Észtország",
          value: "estonia",
        },
        {
          label: "Lettország",
          value: "latvia",
        },
        {
          label: "Litvánia",
          value: "lithuania",
        },
        {
          label: "Luxemburg",
          value: "luxembourg",
        },
        {
          label: "Málta",
          value: "malta",
        },
        {
          label: "Ciprus",
          value: "cyprus",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "streetAddress",
          required: true,
          label: "Cím",
        },
        {
          type: "text",
          name: "city",
          required: true,
          label: "Település",
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
