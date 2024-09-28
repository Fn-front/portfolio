import { z } from 'zod';
import {
  errorMessageMaxLength,
  errorMessageEmail,
  errorMessageAlphanumeric,
} from '@/functions/constants/schema';

export const login = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9!-/:-@[-`{-~]*$/, errorMessageAlphanumeric)
    .email(errorMessageEmail),
  password: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
});

export type loginType = z.infer<typeof login>;
