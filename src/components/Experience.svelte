<script lang="ts">
  import { experiences } from "../data/experiences.js";
</script>

<div class="w-full">
  <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
    Experience
  </h2>
  <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
    Summary of my employment history
  </p>

  <div class="flex flex-col space-y-6">
    {#each experiences as experience}
      <div
        class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl"
      >
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {experience.title}
          <span class="font-normal text-gray-700 dark:text-gray-300">at</span>
          <span class="font-medium text-gray-700 dark:text-gray-300"
            >{experience.company}</span
          >
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {experience.from} - {experience.to}
        </p>

        <ul class="list-disc pl-6 space-y-2">
          {#each experience.bulletpoints as bulletpoint}
            <li class="text-gray-700 dark:text-gray-300">{bulletpoint}</li>
          {/each}
        </ul>

        <div class="mt-4">
          {#each experience.tags as tag}
            <span
              class="inline-block py-1 px-3 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 m-1"
            >
              {tag}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
