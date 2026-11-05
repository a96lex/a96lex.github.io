<script lang="ts">
  export let src: string;
  export let srcDark: string | undefined = undefined;
  export let alt: string;

  const imgClass = "h-full w-full object-cover object-top";
</script>

{#if srcDark}
  <img
    class={`${imgClass} dark:hidden`}
    {alt}
    {src}
    loading="lazy"
    decoding="async"
  />
  <img
    class={`${imgClass} hidden dark:block`}
    {alt}
    src={srcDark}
    loading="lazy"
    decoding="async"
  />
{:else}
  <img class={imgClass} {alt} {src} loading="lazy" decoding="async" />
{/if}
