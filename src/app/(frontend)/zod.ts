import { z } from "zod";
import { categories } from "../config";
export const registerFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Az email nem érvényes" })
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  firstname: z
    .string()
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  lastname: z
    .string()
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  username: z
    .string()
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  password: z
    .string()
    .min(8, {
      message: "A jelszónak legalább 8 karakter hósszunak kell lennie",
    })
    .max(255)
    .regex(/[`!@#$%^&*()_\-+=\[\]{};':"\|,.<>\/?~ ]/, {
      message:
        "A jelszónak tartalmaznia kell egy különleges karaktert (`!@#$%^&*()_-+=[]{};':\"\\|,.<>/?~)",
    }),
});
export type registerFormFields = z.infer<typeof registerFormSchema>;

export const siginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Az email nem érvényes" })
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  password: z
    .string()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(255),
});
export type signinFormFields = z.infer<typeof siginFormSchema>;

export const uploadFormSchema = z.object({
  housename: z
    .string()
    .max(255)
    .min(1, { message: "A mező kitöltése kötelező" }),
  description: z
    .string()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(355),
  roomnum: z
    .number()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(255),
  bathnum: z
    .number()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(255),
  price: z
    .number()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(100000000),
  ventilation: z.boolean(),
  streetAddress: z
    .string()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(255),
  city: z
    .string()
    .min(1, {
      message: "A mező kitöltése kötelező",
    })
    .max(255),
});
export type uploadFormFields = z.infer<typeof uploadFormSchema>;
