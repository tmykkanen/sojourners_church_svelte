import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { formAction } from "./formAction";

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`;
    },
  }),
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      terms: z.boolean(),
    }),
    handler: async (input) => {
      console.log("terms: ", input.terms);
      console.log("email: ", input.email);
      return `You submitted ${input.email}`;
    },
  }),
  // formAction,
};
