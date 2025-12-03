<script lang="ts">
import NavMenu from "$components/NavMenu.svelte";
import * as Drawer from "$lib/components/ui/drawer/index.js";
import Hamburger from "./Sidebar-Hamburger.svelte";

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
    <NavMenu class={"px-8 flex flex-col gap-2"} />
  </Drawer.Content>
</Drawer.Root>
