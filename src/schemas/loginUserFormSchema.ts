import { z } from "zod";

export const loginUserFormSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail is required.")
    .email("Invalid format of e-mail."),
  password: z.string().min(6, "Minimum length is 6 characters."),
});
