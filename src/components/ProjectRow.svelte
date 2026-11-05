<script lang="ts">
  import ArrowIcon from "./ArrowIcon.svelte";
  import Chip from "./Chip.svelte";

  export let name: string;
  export let url: string;
  export let description: string;
  export let tags: string[] = [];
  export let image: string;
  export let imageFit: "cover" | "contain" = "cover";

  // Rows show a 80px thumbnail; public/thumbs holds a 160x112 copy of each image.
  $: thumb = image.replace(/^\/(.+)\.\w+$/, "/thumbs/$1.webp");
</script>

<li>
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    class="group flex items-start gap-4 py-5"
  >
    <img
      class={`h-14 w-20 shrink-0 rounded-md border border-zinc-200 dark:border-zinc-800 ${
        imageFit === "contain" ? "bg-white object-contain p-1" : "object-cover"
      }`}
      alt=""
      src={thumb}
      loading="lazy"
      decoding="async"
    />
    <span class="flex flex-1 flex-col gap-2">
      <span
        class="font-display text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50"
        >{name}</span
      >
      <span>{description}</span>
      <span class="flex flex-wrap gap-1.5">
        {#each tags as tag}
          <Chip label={tag} />
        {/each}
      </span>
    </span>
    <span class="hidden md:block"><ArrowIcon /></span>
  </a>
</li>
