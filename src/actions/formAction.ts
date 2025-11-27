import { defineAction } from "astro:actions";
import {defineAsfAction} from "superforms:astro"
import { message } from "sveltekit-superforms";
import { zSubscribeFormValues } from "$components/SubscribeForm/schema";

export const formAction = {
  // TODO: Put input as variable to receive schema?
  subscribe: defineAsfAction({
    input: zSubscribeFormValues,
    handler: async () => {
      return {
        form: await superValidate(zod4(subscribeFormSchema)),
      };
    },
  }),
  test: defineAction({
    handler: async () => {
      return "Working!";
    },
  }),
};
