<script lang="ts">
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import GradientBg from "./components/GradientBg.svelte";
</script>

<main
  class="min-h-screen transition-all duration-500 bg-gray-200 dark:bg-gray-800"
>
  <GradientBg />
  <div class="flex justify-end items-center p-4">
    <ThemeToggle />
  </div>
</main>
