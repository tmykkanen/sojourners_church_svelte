import type { ActionError } from "astro:actions";
import { z } from "astro/zod";

export const zSubscribeFormValues = z.object({
  name: z.string(),
  email: z.string().email().min(1),
});

export type SubscribeFormSchema = z.infer<typeof zSubscribeFormValues>;

export type Message = ActionError["code"] | "SUCCESS";
