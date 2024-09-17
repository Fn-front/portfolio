import { z } from 'zod';
import {
  errorMessageMaxLength,
  errorMessageInputText,
  errorMessageAlphanumeric,
} from '@/functions/constants/schema';

export const SchemaRegister = z.object({
  name: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  email: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  password: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
  role: z
    .string()
    .min(8, '8' + errorMessageMaxLength)
    .regex(/^[a-zA-Z0-9]+$/, errorMessageAlphanumeric),
});

export type registerType = z.infer<typeof SchemaRegister>;
