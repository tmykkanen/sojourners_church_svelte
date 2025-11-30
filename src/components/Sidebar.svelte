<script lang="ts">
  import Hamburger from "$components/Hamburger.svelte";
  import NavigationMenu from "$components/NavigationMenu.svelte";
  import * as Drawer from "$lib/components/ui/drawer/index.js";

  let open = $state(false);
</script>

<Hamburger
  bind:open
  class={["z-100", "pointer-events-auto"]}
  wrapperClass="z-100 lg:hidden"
  type="spin"
  --color="var(--muted-foreground)"
  --padding="0"
/>

<Drawer.Root bind:open direction="right">
  <Drawer.Content
    class="data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-full pt-24"
  >
    <NavigationMenu class={"px-8 flex flex-col gap-2"} />
  </Drawer.Content>
</Drawer.Root>
