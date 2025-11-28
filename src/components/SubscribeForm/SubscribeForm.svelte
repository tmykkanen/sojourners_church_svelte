<script lang="ts">
import { actions } from "astro:actions";
import { toast } from "svelte-sonner";
import { type SuperValidated, superForm } from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";
import {
  type Message,
  type NewsletterValues,
  zNewsletterValues,
} from "$components/SubscribeForm/schema";
import * as Card from "$lib/components/ui/card";
import * as Form from "$lib/components/ui/form";
import { Input } from "$lib/components/ui/input";
import { Toaster } from "$lib/components/ui/sonner";

let { sv }: { sv: SuperValidated<NewsletterValues, Message> } = $props();

console.log("SV in Component:", sv);

const sf = superForm(sv, { 
  // biome-ignore lint/suspicious/noExplicitAny: Not correctly detecting ZodObjectType
  validators: zodClient(zNewsletterValues as any),
  onError: () => {
    toast.error(i18n());
  },
  onUpdated: ({ form: { message, valid } }) => {
    if (message)
      valid ? toast.success(i18n(message)) : toast.error(i18n(message));
  },
});
const { delayed, enhance, form, submitting } = sf;

function i18n(code?: Message) {
  if (code === "BAD_REQUEST")
    return "An error occurred. Please try again later.";
  if (code === "CONFLICT") return "You are already subscribed.";
  if (code === "SUCCESS") return "Successfully subscribed.";
  return "An error occurred. Please try again later.";
}
</script>


<Card.Root class="w-full max-w-md">
    <form method="POST" action={actions.formAction.subscribeToNewsletter} use:enhance novalidate>
        <Card.Header>
            <Card.Title>Newsletter</Card.Title>
            <Card.Description>Please enter your email address to subscribe to our newsletter.</Card.Description>
        </Card.Header>
        <Card.Content>
            <Form.Field form={sf} name="email">
                <Form.Control>
                    {#snippet children({ props })}
                        <Input {...props} type="email" bind:value={$form.email} />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
        </Card.Content>
        <Card.Footer>
            <Form.Button disabled={$submitting}>{$delayed ? "Subscribing..." : "Subscribe"}</Form.Button>
        </Card.Footer>
    </form>
</Card.Root>
<Toaster />

