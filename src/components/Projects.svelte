<script lang="ts">
  import { personal } from "../data/projects.js";
  import Card from "./Card.svelte";
  import Collapsible from "./Collapsible.svelte";
  import ProjectRow from "./ProjectRow.svelte";
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

  <div class="mt-10">
    <Collapsible id="more-projects" title={`More projects (${others.length})`}>
      <ul class="mt-2 divide-y divide-zinc-200 dark:divide-zinc-800">
        {#each others as project}
          <ProjectRow {...project} />
        {/each}
      </ul>
    </Collapsible>
  </div>
</Section>
