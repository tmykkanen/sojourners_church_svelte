<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import type { SermonData } from "$lib/types";
  import Select from "./SermonFilter-Select.svelte";
  import DatePicker from "./SermonFilter-DatePicker.svelte";

  let {
    allSermonData,
    allSeriesData,
    allPreachersData,
  }: {
    allSermonData: SermonData[];
    allSeriesData: CollectionEntry<"series">[];
    allPreachersData: CollectionEntry<"preachers">[];
  } = $props();

  let series = $state(undefined);
  let preacher = $state(undefined);
  let from = $state(undefined);
  let to = $state(undefined);
</script>

<div class="flex flex-col gap-2 md:grid md:grid-cols-2">
  <Select label="Series" bind:value={series} data={allSeriesData} />
  <Select label="Preacher" bind:value={preacher} data={allPreachersData} />
  <DatePicker label="From" bind:value={from} />
  <DatePicker label="From" bind:value={to} />
  <p>Series: {series}</p>
  <p>Preacher: {preacher}</p>
  <p>From: {from}</p>
  <p>To: {to}</p>
</div>
