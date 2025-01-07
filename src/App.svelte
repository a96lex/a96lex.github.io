<script lang="ts">
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import GradientBg from "./components/GradientBg.svelte";
  import About from "./components/About.svelte";
  import Title from "./components/Title.svelte";
</script>

<main
  class="min-h-screen transition-all duration-500 bg-gray-200 dark:bg-gray-800"
>
  <GradientBg />
  <div class="flex justify-end items-center p-4 sticky">
    <ThemeToggle />
  </div>

  <div
    class="flex flex-col items-start gap-10 max-w-4xl mx-auto"
  >
    <Title />
    <About />
  </div>
</main>
