<script lang="ts">
  import ArrowIcon from "./ArrowIcon.svelte";
  import Chip from "./Chip.svelte";
  import LivePreview from "./LivePreview.svelte";
  import Picture from "./Picture.svelte";

  export let name: string;
  export let url: string;
  export let description: string;
  export let tags: string[] = [];
  export let image: string | undefined = undefined;
  export let imageDark: string | undefined = undefined;
  export let selfReferencial = false;
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
>
  {#if image}
    <div
      class="aspect-[16/10] overflow-hidden border-b border-zinc-200 dark:border-zinc-800"
    >
      {#if selfReferencial}
        <div class="flex h-full w-full items-center justify-center">
          <div
            class="h-[80%] w-[80%] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-700 sm:h-full sm:w-full sm:rounded-none sm:border-0"
          >
            <LivePreview>
              <Picture src={image} srcDark={imageDark} alt={name} />
            </LivePreview>
          </div>
        </div>
      {:else}
        <Picture src={image} srcDark={imageDark} alt={name} />
      {/if}
    </div>
  {/if}
  <div class="flex flex-1 flex-col gap-3 p-5">
    <h3 class="flex items-center justify-between gap-4 text-xl font-semibold">
      {name}
      <ArrowIcon />
    </h3>
    <p>{description}</p>
    {#if tags.length}
      <div class="mt-auto flex flex-wrap gap-1.5 pt-2">
        {#each tags as tag}
          <Chip label={tag} />
        {/each}
      </div>
    {/if}
  </div>
</a>
