import { z } from "zod";
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
