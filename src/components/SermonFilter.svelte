<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import type { SermonData } from "$lib/types";
  import Select from "./Select.svelte";

  let {
    allSermonData,
    allSeriesData,
    allPreachersData,
  }: {
    allSermonData: SermonData[];
    allSeriesData: CollectionEntry<"series">[];
    allPreachersData: CollectionEntry<"preachers">[];
  } = $props();

  let series = $state("");
  let preacher = $state("");
</script>

<div class="flex flex-col gap-2 md:grid md:grid-cols-2">
  <Select label="Series" bind:value={series} data={allSeriesData} />
  <!-- <p>Series: {series}</p> -->
  <Select label="Preacher" bind:value={preacher} data={allPreachersData} />
  <!-- <p>Preacher: {preacher}</p> -->
</div>
