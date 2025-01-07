<script lang="ts">
  import { projects } from "../data/projects.js";
</script>

<div class="w-full">
  <h2>Projects</h2>
  <p>Here is a sample of what I have done in the past years</p>

  <div class="columns-1 lg:columns-2 pt-2 break-inside-avoid-column">
    {#each projects as project}
      <div
        class="bg-gray-200 dark:bg-gray-600 mb-4 rounded-lg text-gray-800 dark:text-gray-200 w-full pb-2"
      >
        <h3
          class="text-2xl font-bold bg-gray-300 dark:bg-gray-700 rounded-t-lg px-6 py-2"
        >
          {project.name}
        </h3>
        <p class="text-xl px-6 mt-3 mb-6">{project.description}</p>

        <div class="px-4 pb-2">
          {#each project.tags as tag}
            <span class="p-2 bg-gray-300 dark:bg-gray-700 m-1 rounded-md"
              >{tag}</span
            >
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
