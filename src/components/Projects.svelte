<script lang="ts">
  import { personal } from "../data/projects.js";
  import ArrowIcon from "./ArrowIcon.svelte";
  import Card from "./Card.svelte";
  import Chip from "./Chip.svelte";
  import Section from "./Section.svelte";

  const featured = personal.filter((project) => project.featured);
  const others = personal.filter((project) => !project.featured);
</script>

<Section
  id="projects"
  title="Personal projects"
  description="Things I've built in my own time."
>
  <div class="grid gap-6 sm:grid-cols-2">
    {#each featured as project}
      <Card {...project} />
    {/each}
  </div>

  <h3 class="mb-2 mt-10 text-xl font-semibold">More projects</h3>
  <ul class="divide-y divide-zinc-200 dark:divide-zinc-800">
    {#each others as project}
      <li>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-start gap-4 py-5"
        >
          <img
            class={`h-14 w-20 shrink-0 rounded-md border border-zinc-200 dark:border-zinc-800 ${
              project.imageFit === "contain"
                ? "bg-white object-contain p-1"
                : "object-cover"
            }`}
            alt=""
            src={project.image}
          />
          <span class="flex flex-1 flex-col gap-2">
            <span
              class="font-display text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50"
              >{project.name}</span
            >
            <span>{project.description}</span>
            <span class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <Chip label={tag} />
              {/each}
            </span>
          </span>
          <span class="hidden md:block"><ArrowIcon /></span>
        </a>
      </li>
    {/each}
  </ul>
</Section>
