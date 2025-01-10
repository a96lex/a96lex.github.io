<script lang="ts">
  import { projects } from "../data/projects.js";
</script>

<div class="w-full">
  <h2>Projects</h2>
  <p class="mb-4">Here is a sample of what I have done in the past years.</p>

  <div class="flex flex-row flex-wrap justify-between">
    {#each projects as project}
      <div
        class={`transition-all duration-300 mb-4 rounded-lg text-gray-800 dark:text-gray-200 w-full pb-2 lg:w-[calc(50%-0.5em)] 
          ${
            project.image
              ? "bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/public/slime-mold.png')] dark:bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/public/slime-mold.png')]"
              : "bg-gray-200 dark:bg-gray-600"
          } 
          bg-cover bg-center`}
      >
        <h3
          class={`text-lg font-bold bg-gray-300 dark:bg-gray-700 rounded-t-lg px-6 py-2 ${
            project.image && "bg-opacity-50 dark:bg-opacity-50"
          } backdrop-blur-sm`}
        >
          {project.name}
        </h3>
        <p class="px-6 mt-3 mb-6">{project.description}</p>

        <div class="px-4 pb-2">
          {#each project.tags as tag}
            <span
              class={`p-2 bg-gray-300 dark:bg-gray-700 m-1 rounded-md backdrop-blur-sm ${
                project.image && "bg-opacity-50 dark:bg-opacity-50"
              }`}
            >
              {tag}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
