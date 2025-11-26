<script lang="ts">
  import { Button, type ButtonProps } from "$lib/components/ui/button/index.js";

  let { children, ...restProps }: ButtonProps = $props();
</script>

<Button {...restProps}>
  {@render children?.()}
</Button>
