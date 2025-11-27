<script lang="ts">
  import { projects } from "../data/projects.js";
  import { onMount, onDestroy } from "svelte";

  let activeProjectIndex = -1;
  let projectElements: HTMLElement[] = [];

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

  const checkCenteredProject = () => {
    const viewportCenter = window.innerHeight / 2;
    let closestIndex = -1;
    let closestDistance = Infinity;

    projectElements.forEach((el, index) => {
      if (!el) return;
      const elementCenter = el.getBoundingClientRect().top + el.offsetHeight / 2;
      const distance = Math.abs(elementCenter - viewportCenter);
      if (distance < closestDistance && distance < window.innerHeight / 3) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    activeProjectIndex = closestIndex;
  };

  onMount(() => {
    if (window.innerWidth < 1024) {
      checkCenteredProject();
      window.addEventListener("scroll", checkCenteredProject);
      window.addEventListener("resize", checkCenteredProject);
    }
  });

  onDestroy(() => {
    window.removeEventListener("scroll", checkCenteredProject);
    window.removeEventListener("resize", checkCenteredProject);
  });
</script>

<div class="w-full">
  <h2>Projects</h2>
  <p class="mb-4">Here is a sample of what I have done in the past years.</p>

  <div class="flex flex-row flex-wrap justify-between">
    {#each projects as project, i}
      <div
        bind:this={projectElements[i]}
        class="z-40 transition-all duration-300 mb-4 rounded-lg text-gray-800 dark:text-gray-200 w-full pb-2 lg:w-[calc(50%-0.5em)] relative group"
      > 
        {#if project.image}
          <div
            class="absolute rounded-lg inset-0 bg-gray-100 dark:bg-gray-800 opacity-100"
          ></div>
          <div
            class="absolute rounded-lg inset-0 bg-cover bg-center opacity-10 group-hover:opacity-50"
            class:!opacity-50={activeProjectIndex === i}
            style={`background-image: url('${project.image}');`}
          ></div>
        {/if}
        <div class="relative">
          <h3
            class={`text-lg font-bold bg-gray-300 dark:bg-gray-700 rounded-t-lg px-6 py-2 flex justify-between items-center ${
              project.image && "bg-opacity-50 dark:bg-opacity-50"
            } backdrop-blur-sm`}
          >
            <span>{project.name}</span>
            {#if project.url}
              {@const icon = getUrlIcon(project.url)}
              <a
                class="opacity-10 group-hover:opacity-100"
                class:!opacity-100={activeProjectIndex === i}
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
                  <span>🔗</span>
                {/if}
              </a>
            {/if}
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
