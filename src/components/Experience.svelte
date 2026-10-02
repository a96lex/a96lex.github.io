<script lang="ts">
  import { experiences } from "../data/experiences.js";
  import Chip from "./Chip.svelte";
  import Section from "./Section.svelte";
</script>

<Section
  id="experience"
  title="Experience"
  description="Before going freelance, I worked at these companies."
>
  <ol class="flex flex-col gap-12">
    {#each experiences as experience}
      <li class="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-8">
        <p class="pt-1 text-sm font-medium text-zinc-500">
          {experience.from} – {experience.to}
        </p>
        <div>
          <h3 class="text-xl font-semibold">
            {experience.title}
            <span class="font-normal text-zinc-500">at</span>
            {#if experience.url}
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-zinc-300 underline-offset-4 hover:decoration-current dark:decoration-zinc-700"
                >{experience.company}</a
              >
            {:else}
              {experience.company}
            {/if}
          </h3>
          <ul class="mt-4 flex list-disc flex-col gap-2 pl-5">
            {#each experience.bulletpoints as bulletpoint}
              <li>{bulletpoint}</li>
            {/each}
          </ul>
          <div class="mt-4 flex flex-wrap gap-1.5">
            {#each experience.tags as tag}
              <Chip label={tag} />
            {/each}
          </div>
        </div>
      </li>
    {/each}
  </ol>
</Section>
