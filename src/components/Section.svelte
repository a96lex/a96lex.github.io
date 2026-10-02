<script lang="ts">
  export let id: string;
  export let title: string;
  export let description = "";
</script>

<section {id} class="w-full">
  <h2 class="text-3xl font-bold md:text-4xl">{title}</h2>
  {#if description}
    <p class="mt-2 max-w-2xl">{description}</p>
  {/if}
  <div class="mt-6">
    <slot />
  </div>
</section>
