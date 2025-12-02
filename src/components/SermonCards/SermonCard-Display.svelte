<script lang="ts">
  import SermonCard from "./SermonCard.svelte";
  import { series, preacher, from, to } from "$lib/nanostores";
  import type { SermonData, SeriesData, PreacherData } from "$lib/types";

  let { allSermonData } = $props();

  const getFilteredSermons = (sermonData: SermonData[]) => {
    if ($series) {
      sermonData = sermonData.filter((item) => item.series.id == $series);
    }

    if ($preacher) {
      sermonData = sermonData.filter((item) => item.preacher.id == $preacher);
    }

    if ($from) {
      sermonData = sermonData.filter(
        (item) => item.data.date >= $from.toDate("America/Chicago"),
      );
    }
    if ($to) {
      sermonData = sermonData.filter(
        (item) => item.data.date <= $to.toDate("America/Chicago"),
      );
    }

    return sermonData;
  };

  let filteredSermons = $derived.by(() => getFilteredSermons(allSermonData));
</script>

{#each filteredSermons as sermon (sermon.id)}
  <SermonCard baseUrl="/sermons/" {sermon} />
{/each}
