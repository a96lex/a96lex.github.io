<script lang="ts">
  import type { Project } from "../data/projects.js";

  export let projects: Project[];
  export let title: string;
  export let description: string;

  const getUrlIcon = (url: string) => {
    if (url.match(/github\.com/)) {
      return {
        src: "https://github.githubassets.com/favicons/favicon.svg",
        invertOnDarkMode: true,
      };
    }
    if (url.match(/devpost\.com/)) {
      return {
        src: "https://devpost.com/favicon.ico",
      };
    }
    if (url.match(/itch\.io/)) {
      return {
        src: "https://itch.io/favicon.ico",
      };
    }
  };
</script>

<div class="w-full">
  <h2>{title}</h2>
  <p class="mb-4">
    {description}
  </p>

  <div class="flex flex-col gap-4">
    {#each projects as project, index}
      {@const icon = getUrlIcon(project.url)}
      <div
        class={`transition-all duration-300 text-gray-800 dark:text-gray-200 w-full relative group flex flex-col lg:flex-row gap-4 ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <img
          class="rounded-md w-full lg:w-2/5 h-60 object-cover border border-gray-200 dark:border-gray-700"
          alt={project.name}
          src={project.image}
        />
        <div class="relative flex-1 w-full lg:w-3/5">
          <h3
            class={`text-lg font-bold  px-6 py-2 flex justify-between items-center ${
              project.image && "bg-opacity-50 dark:bg-opacity-50"
            } backdrop-blur-sm`}
          >
            <span>{project.name}</span>
            <a
              class="bg-gray-300 dark:bg-gray-700 px-10 py-1 rounded-lg"
              href={project.url}
              aria-label="project url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {#if icon}
                <img
                  src={icon.src}
                  alt="URL Icon"
                  class={`h-5 w-5  ${icon.invertOnDarkMode && "dark:invert"}`}
                />
              {:else}
                <img
                  src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><text y='16' font-size='16'>🔗</text></svg>"
                  alt="Link"
                  class="h-5 w-5"
                />
              {/if}
            </a>
          </h3>
          <p class="px-6 mt-3 mb-6">{project.description}</p>
          <div class="px-4 pb-2">
            {#each project.tags as tag}
              <span
                class={`p-2 bg-gray-300 dark:bg-gray-700 m-1 rounded-md backdrop-blur-sm whitespace-nowrap ${
                  project.image && "bg-opacity-50 dark:bg-opacity-50"
                }`}
              >
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
