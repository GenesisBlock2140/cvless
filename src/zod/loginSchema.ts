import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1).email().max(64),
  password: z.string().min(3).max(64),
});
