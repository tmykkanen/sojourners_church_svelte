<script lang="ts">
import { actions } from "astro:actions";
import Icon from "@iconify/svelte";
import MailIcon from "@lucide/svelte/icons/mail";
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
import * as InputGroup from "$lib/components/ui/input-group";
import { Toaster } from "$lib/components/ui/sonner";

let { sv }: { sv: SuperValidated<NewsletterValues, Message> } = $props();

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

<Card.Root class="w-full py-0 bg-accent border-none shadow-none">
  <form
    method="POST"
    action={actions.formAction.subscribeToNewsletter}
    use:enhance
    novalidate
    class="flex flex-col gap-2"
  >
    <!-- <Card.Header>
      <Card.Title>Weekly Bulletin</Card.Title>
      <Card.Description
        >Sign up to stay informed and connected to Sojourners Church weekly
        happenings.</Card.Description
      >
    </Card.Header> -->
    <Card.Content class="gap-2 flex flex-col px-0">
      <Form.Field form={sf} name="firstName">
        <Form.Control>
          {#snippet children({ props })}
            <!-- <Form.Label>First Name</Form.Label> -->
            <Input {...props} type="text" bind:value={$form.firstName} placeholder="First Name" class="bg-muted text-muted-foreground mb-0"/>
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field form={sf} name="lastName">
        <Form.Control>
          {#snippet children({ props })}
            <!-- <Form.Label>Last Name</Form.Label> -->
            <Input {...props} type="text" bind:value={$form.lastName} placeholder="Last Name" class="bg-muted text-muted-foreground mb-0"/>
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field form={sf} name="email">
        <Form.Control>
          {#snippet children({ props })}
            <!-- <Form.Label>Email</Form.Label> -->
            <InputGroup.Root class="bg-muted text-muted-foreground mb-0">
              <InputGroup.Input {...props} type="email" bind:value={$form.email} placeholder="mail@site.com"/>
              <InputGroup.Addon>
                <!-- <MailIcon /> -->
                 <Icon icon=mdi:email-outline/>
              </InputGroup.Addon>
            </InputGroup.Root>
            <!-- <Input {...props} type="email" bind:value={$form.email} placeholder="mail@site.com"/> -->
          {/snippet}
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </Card.Content>
    <Card.Footer class="px-0 w-full">
      <Form.Button disabled={$submitting} class="w-full bg-muted" variant="outlineFooter"
        >{$delayed ? "Subscribing..." : "Subscribe"}</Form.Button
      >
    </Card.Footer>
  </form>
</Card.Root>
<Toaster />
