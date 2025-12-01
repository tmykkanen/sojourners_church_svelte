<script lang="ts">
  import { Input } from "$lib/components/ui/input/";

  let { ...restProps } = $props();
</script>

<Input {...restProps}>
  <!-- {@render children?.()} -->
</Input>
