<script lang="ts">
import { onMount } from "svelte";
//  https://svelte-hamburgers.willow.codes/
import { Hamburger } from "svelte-hamburgers";
import Button from "$components/Button.svelte";
import NavigationMenu from "$components/NavigationMenu.svelte";
import * as Drawer from "$lib/components/ui/drawer/index.js";

let triggerRef = $state<HTMLButtonElement | null>(null);

function clickTrigger() {
	triggerRef?.click();
}

let open = $state(false);

onMount(() => {
	// This code will run only in the browser, after the component is mounted to the DOM.
	// You can safely access and manipulate DOM elements here.
	const element = document.querySelector('[aria-label="Hamburger menu"]');
	if (element) {
		// console.log(element.attributes.class)
		element.classList.add("z-100", "pointer-events-auto");
		// Perform DOM manipulations or initialize third-party libraries here.
	}
});
</script>

<Hamburger bind:open type="spin" --color="var(--accent)" />
 
<Drawer.Root bind:open direction="right" >
 <!-- <Drawer.Trigger >Open</Drawer.Trigger> -->
 <Drawer.Content >
  <!-- <Drawer.Header>
   <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
   <Drawer.Description>This action cannot be undone.</Drawer.Description>
  </Drawer.Header>
  <Drawer.Footer>
   <Button>Submit</Button>
   
  </Drawer.Footer> -->
  
  <NavigationMenu />
  <!-- <Drawer.Close bind:ref={triggerRef}>Cancel</Drawer.Close> -->
</Drawer.Content>
</Drawer.Root>