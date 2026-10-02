<script lang="ts">
  import Links from "./Links.svelte";
  import Section from "./Section.svelte";
</script>

<Section
  id="contact"
  title="Contact"
  description="The best way to reach me is by email."
>
  <Links />
  <p class="mt-16 text-sm text-zinc-500">
    Built with Svelte and Tailwind.
    <a
      href="https://github.com/a96lex/a96lex.github.io"
      target="_blank"
      rel="noopener noreferrer"
      class="underline underline-offset-4">Source</a
    >
  </p>
</Section>
