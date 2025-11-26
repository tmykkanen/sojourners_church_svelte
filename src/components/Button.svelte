<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";

let { children, className, ...restProps } = $props();
</script>
 
<Button {...restProps}>
{@render children?.()}
</Button>