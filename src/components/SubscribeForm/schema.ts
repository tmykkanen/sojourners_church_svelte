import type { ActionError } from "astro:actions";
import { z } from "astro/zod";

export const zNewsletterValues = z.object({
  email: z.string().email().min(1),
});

export type NewsletterValues = z.infer<typeof zNewsletterValues>;

export type Message = ActionError["code"] | "SUCCESS";
