<script lang="ts">
import { onMount } from "svelte";
import type { MouseEventHandler } from "svelte/elements";
//  https://svelte-hamburgers.willow.codes/
import { Hamburger, type HamburgerType } from "svelte-hamburgers";

interface HamburgerProps {
  open?: boolean;
  type?: HamburgerType;
  title?: string;
  ariaLabel?: string;
  ariaControls?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  wrapperClass?: string;
  class?: string[];
}

let {
  wrapperClass,
  class: classList,
  open = $bindable(false),
  ...restProps
}: HamburgerProps = $props();

onMount(() => {
  if (!classList) return;

  const element = document.querySelector('[aria-label="Hamburger menu"]');
  if (element) {
    classList.forEach((item) => {
      element.classList.add(item);
    });
  }
});
</script>

<div class={wrapperClass}>
  <Hamburger bind:open {...restProps} />
</div>
