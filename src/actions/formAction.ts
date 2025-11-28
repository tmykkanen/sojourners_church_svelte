import { defineAsfAction } from "superforms:astro";
import { message } from "sveltekit-superforms";
import {
  type Message,
  zNewsletterValues,
} from "$components/SubscribeForm/schema";

export const formAction = {
  //...
  // TODO: Set actual handling for newsletter subscription
  subscribeToNewsletter: defineAsfAction({
    input: zNewsletterValues,
    handler: async ({ email }, { form }) => {
      console.log("subscribeToNewsletter", { email });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = Math.random();
      if (response < 0.3)
        return message<Message>(form, "BAD_REQUEST", { status: 400 });
      if (response < 0.5)
        return message<Message>(form, "CONFLICT", { status: 409 });
      return message<Message>(form, "SUCCESS");
    },
  }),
  //...
};
