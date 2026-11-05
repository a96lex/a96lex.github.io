<script lang="ts">
  import { slide } from "svelte/transition";

  export let id: string;
  export let title: string;
  export let level: 2 | 3 = 3;
  export let open = false;

  const headingClass =
    level === 2 ? "text-3xl font-bold md:text-4xl" : "text-xl font-semibold";
</script>

<div>
  <button
    type="button"
    aria-expanded={open}
    aria-controls={id}
    on:click={() => (open = !open)}
    class="group flex items-center gap-2 text-left"
  >
    <svelte:element
      this={`h${level}`}
      class={`${headingClass} group-hover:underline`}
    >
      {title}
    </svelte:element>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        fill-rule="evenodd"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  {#if open}
    <div {id} transition:slide={{ duration: 300 }}>
      <slot />
    </div>
  {/if}
</div>
