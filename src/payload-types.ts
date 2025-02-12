/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    customers: CustomerAuthOperations;
  };
  collections: {
    users: User;
    pfps: Pfp;
    customers: Customer;
    housepics: Housepic;
    houses: House;
    orders: Order;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pfps: PfpsSelect<false> | PfpsSelect<true>;
    customers: CustomersSelect<false> | CustomersSelect<true>;
    housepics: HousepicsSelect<false> | HousepicsSelect<true>;
    houses: HousesSelect<false> | HousesSelect<true>;
    orders: OrdersSelect<false> | OrdersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Customer & {
        collection: 'customers';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface CustomerAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pfps".
 */
export interface Pfp {
  id: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  picture?: (string | null) | Pfp;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "housepics".
 */
export interface Housepic {
  id: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "houses".
 */
export interface House {
  id: string;
  housepics?:
    | {
        pictures: string | Housepic;
        id?: string | null;
      }[]
    | null;
  name: string;
  owner: string | Customer;
  description: string;
  roomnum: number;
  bathnum: number;
  price: number;
  rating?: number | null;
  inuse?: boolean | null;
  category:
    | 'mansion'
    | 'pondside'
    | 'holiday'
    | 'apartment'
    | 'beachhouse'
    | 'mountaincabin'
    | 'farmhouse'
    | 'treehouse'
    | 'palace'
    | 'domehouse'
    | 'Cycladesstyle'
    | 'trianglehouse'
    | 'skihouse'
    | 'pond'
    | 'beautifulview'
    | 'boathouse'
    | 'cavehouse'
    | 'glasshouse'
    | 'earthhouse'
    | 'containerhouse'
    | 'luxuryvilla'
    | 'desertoasis'
    | 'penthouse'
    | 'historichome'
    | 'yurt'
    | 'islandhouse';
  popular?: boolean | null;
  ventelation?: boolean | null;
  spotlight?: boolean | null;
  country?:
    | (
        | 'germany'
        | 'france'
        | 'spain'
        | 'hungary'
        | 'uk'
        | 'italy'
        | 'netherlands'
        | 'belgium'
        | 'austria'
        | 'sweden'
        | 'poland'
        | 'portugal'
        | 'greece'
        | 'czech_republic'
        | 'finland'
        | 'ireland'
        | 'denmark'
        | 'romania'
        | 'bulgaria'
        | 'croatia'
        | 'slovakia'
        | 'slovenia'
        | 'estonia'
        | 'latvia'
        | 'lithuania'
        | 'luxembourg'
        | 'malta'
        | 'cyprus'
      )
    | null;
  streetAddress: string;
  city: string;
  reviews?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  paymentIntentId: string;
  owner: string | Customer;
  customer: string | Customer;
  house: string | House;
  startDate: string;
  endDate: string;
  status?: ('active' | 'cancelled') | null;
  stripeId: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'pfps';
        value: string | Pfp;
      } | null)
    | ({
        relationTo: 'customers';
        value: string | Customer;
      } | null)
    | ({
        relationTo: 'housepics';
        value: string | Housepic;
      } | null)
    | ({
        relationTo: 'houses';
        value: string | House;
      } | null)
    | ({
        relationTo: 'orders';
        value: string | Order;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'customers';
        value: string | Customer;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'customers';
        value: string | Customer;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pfps_select".
 */
export interface PfpsSelect<T extends boolean = true> {
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers_select".
 */
export interface CustomersSelect<T extends boolean = true> {
  username?: T;
  firstname?: T;
  lastname?: T;
  picture?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "housepics_select".
 */
export interface HousepicsSelect<T extends boolean = true> {
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "houses_select".
 */
export interface HousesSelect<T extends boolean = true> {
  housepics?:
    | T
    | {
        pictures?: T;
        id?: T;
      };
  name?: T;
  owner?: T;
  description?: T;
  roomnum?: T;
  bathnum?: T;
  price?: T;
  rating?: T;
  inuse?: T;
  category?: T;
  popular?: T;
  ventelation?: T;
  spotlight?: T;
  country?: T;
  streetAddress?: T;
  city?: T;
  reviews?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders_select".
 */
export interface OrdersSelect<T extends boolean = true> {
  paymentIntentId?: T;
  owner?: T;
  customer?: T;
  house?: T;
  startDate?: T;
  endDate?: T;
  status?: T;
  stripeId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}