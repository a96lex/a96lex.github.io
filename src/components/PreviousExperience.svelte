<script lang="ts">
  import { past } from "../data/work.js";
  import Collapsible from "./Collapsible.svelte";
  import Experience from "./Experience.svelte";
  import ProjectRow from "./ProjectRow.svelte";
</script>

<section id="experience" class="w-full">
  <Collapsible id="previous-experience" title="Previous experience" level={2}>
    <h3 class="mt-8 text-xl font-semibold">Freelance</h3>
    <ul class="mt-2 divide-y divide-zinc-200 dark:divide-zinc-800">
      {#each past as client}
        <ProjectRow {...client} />
      {/each}
    </ul>

    <h3 class="mb-6 mt-10 text-xl font-semibold">Before freelancing</h3>
    <Experience />
  </Collapsible>
</section>
