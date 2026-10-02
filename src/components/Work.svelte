<script lang="ts">
  import { current, past } from "../data/work.js";
  import ArrowIcon from "./ArrowIcon.svelte";
  import Card from "./Card.svelte";
  import Chip from "./Chip.svelte";
  import Section from "./Section.svelte";
</script>

<Section id="work" title="Currently">
  <div class="flex flex-col gap-6">
    {#each current as engagement}
      <a
        href={engagement.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group grid overflow-hidden rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 md:grid-cols-5"
      >
        {#if engagement.image}
          <div
            class="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 dark:border-zinc-800 md:col-span-2 md:aspect-auto md:border-b-0 md:border-r"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover object-left-top"
              alt={engagement.company}
              src={engagement.image}
            />
          </div>
        {/if}
        <div
          class={`flex flex-col gap-3 p-6 ${
            engagement.image ? "md:col-span-3" : "md:col-span-5"
          }`}
        >
          <h3
            class="flex items-center justify-between gap-4 text-2xl font-semibold"
          >
            {engagement.company}
            <ArrowIcon />
          </h3>
          <ul class="text-sm text-zinc-500">
            {#each engagement.roles as role}
              <li>{role.title}, {role.from} – {role.to ?? "present"}</li>
            {/each}
          </ul>
          <p>{engagement.description}</p>
          <div class="mt-auto flex flex-wrap gap-1.5">
            {#each engagement.tags as tag}
              <Chip label={tag} />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</Section>

<Section
  id="freelance"
  title="Freelance work"
  description="Some of the teams I've built things for."
>
  <div class="grid gap-6 sm:grid-cols-2">
    {#each past as client}
      <Card {...client} />
    {/each}
  </div>
</Section>
