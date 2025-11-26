<script lang="ts">
  // import type { HTMLAttributes } from "astro/types";
  import Button from "$components/Button.svelte";
  import { type ButtonProps } from "$lib/components/ui/button";

  // interface Props extends HTMLAttributes<"ul"> {}

  const navItems = [
    { label: "About Us", url: "/about" },
    { label: "Life Together", url: "/life" },
    { label: "Sermons", url: "/sermons" },
    { label: "Writings", url: "/writings" },
    { label: "What is the Gospel?", url: "/gospel", variant: "secondary" },
  ];

  const { ...attrs } = $props();
</script>

<ul {...attrs}>
  {#each navItems as { label, url, variant = "ghost" }}
    <li>
      <Button
        href={url}
        variant={variant as ButtonProps["variant"]}
        class={["w-full text-xs tracking-widest uppercase sm:text-sm"]}
        >{label}
      </Button>
    </li>
  {/each}
</ul>
