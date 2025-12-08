<script lang="ts">
import { format } from "date-fns";
import Text from "$components/Text.svelte";
import * as Card from "$lib/components/ui/card";

const { baseUrl, sermon } = $props();

const {
  id,
  data: { title, date, scripture },
  series: {
    data: { imageSquare },
  },
  preacher: {
    data: { name },
  },
} = sermon;
</script>

<Card.Root class="py-0 border-none rounded-sm shadow-sm bg-muted">
  <Card.Content class="p-0 flex flex-row">
    <a href={`${baseUrl}${id}`} class="flex max-h-48 flex-row w-full">
      <img
        src={imageSquare}
        alt="series"
        class="h-full rounded-l-sm max-sm:flex-1/3"
      />
      <div class="xs:p-4 flex flex-2/3 flex-col justify-center p-2 sm:p-8">
        <Text as="h3" variant="subheading">{title}</Text>
        <Text as="span" variant="meta">
          {format(
            new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000),
            "LLLL dd, yyyy",
          )}
          <br />
          {scripture}
          <br />
          {name}
        </Text>
      </div>
    </a>
  </Card.Content>
</Card.Root>
