import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().min(1).email().max(64),
  password: z.string().min(3).max(64),
});
