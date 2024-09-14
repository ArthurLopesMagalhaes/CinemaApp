import { z } from 'zod';

export const createUserFormSchema = z.object({
  name: z.string().min(3, 'Name must have at least 3 characters.'),
  email: z
    .string()
    .min(1, 'E-mail is required.')
    .email('Invalid format of e-mail.'),
  password: z
    .string()
    .min(6, 'Minimum length is 6 characters.')
    .max(72, 'Maximum length is 72 characters'),
});
