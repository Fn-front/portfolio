import { z } from 'zod';

export const login = z.object({
  name: z.string().min(8),
  password: z.string().min(8),
});

export type loginType = z.infer<typeof login>;
