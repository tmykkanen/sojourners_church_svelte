<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import * as Select from "$lib/components/ui/select/index.js";

  // interface Props {
  //   label: "Series" | "Preacher" | "From" | "To";
  //   value: any;
  //   options?: CollectionEntry<"series">[] | CollectionEntry<"preachers">[];
  //   type: "select" | "date";
  // }

  // let { label, value = $bindable(), options, type }: Props = $props();

  let {
    data,
    value = $bindable(),
    label,
    ...restProps
  }: {
    data: CollectionEntry<"series">[] | CollectionEntry<"preachers">[];
    value: any;
    label: "Series" | "Preacher";
  } = $props();

  const options = data.map((item) => {
    let label;
    if ("title" in item.data) label = item.data.title;
    if ("name" in item.data) label = item.data.name;
    return {
      id: item.id,
      label,
    };
  });

  const triggerContent = $derived(
    options.find((item) => item.id === value)?.label ?? `Filter by ${label}`,
  );
</script>

<div class="inline-flex items-stretch">
  <p
    class="bg-muted rounded-l-md px-4 border border-muted-content/20 h-full flex items-center flex-1/4 sm:flex-1 min-w-24"
  >
    {label}:
  </p>
  <Select.Root type="single" bind:value>
    <Select.Trigger
      class="flex-[65%] rounded-l-none -ml-px bg-muted text-muted-foreground"
    >
      {triggerContent}
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        {#each options as option (option.id)}
          <Select.Item value={option.id} label={option.label}>
            {option.label}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
  </Select.Root>
</div>
