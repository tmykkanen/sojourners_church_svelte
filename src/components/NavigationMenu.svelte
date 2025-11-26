<script lang="ts">
// import type { HTMLAttributes } from "astro/types";
import Button from "$components/Button.svelte";

// interface Props extends HTMLAttributes<"ul"> {}

const navItems = [
	{ label: "About Us", url: "/about" },
	{ label: "Life Together", url: "/life" },
	{ label: "Sermons", url: "/sermons" },
	{ label: "Writings", url: "/writings" },
	{ label: "What is the Gospel?", url: "/gospel", outline: true },
];

const { ...attrs } = $props();
</script>

<ul {...attrs}>
  {#each navItems as {label, url, outline}}
    <li>
      <Button href={url} variant="link">{label}</Button>
    </li>
  {/each}
</ul>