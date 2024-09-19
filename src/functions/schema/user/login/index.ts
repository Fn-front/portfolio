import { z } from 'zod';
import {
  errorMessageMaxLength,
  errorMessageInputText,
  errorMessageAlphanumeric,
} from '@/functions/constants/schema';

export const login = z.object({
  email: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  password: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
});

export type loginType = z.infer<typeof login>;
