import { z } from 'zod';
import {
  errorMessageMaxLength,
  errorMessageInputText,
  errorMessageAlphanumeric,
  errorMessageEmail,
} from '@/functions/constants/schema';

export const SchemaRegister = z.object({
  name: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  email: z
    .string()
    .regex(/^[a-zA-Z0-9!-/:-@[-`{-~]*$/, errorMessageAlphanumeric)
    .email(errorMessageEmail),
  password: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  role: z.enum(['admin', 'user', 'mock', 'codeView'], {
    errorMap: () => {
      return { message: 'roleを選択してください' };
    },
  }),
});

export type registerType = z.infer<typeof SchemaRegister>;
