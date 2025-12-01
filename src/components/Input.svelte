<script lang="ts">
  import { Input } from "$lib/components/ui/Input/index.js";

  let { ...restProps } = $props();
</script>

<Input {...restProps}>
  <!-- {@render children?.()} -->
</Input>
