<script lang="ts">
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import GradientBg from "./components/GradientBg.svelte";
  import About from "./components/About.svelte";
  import Title from "./components/Title.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";
</script>

<main class="min-h-screen bg-gray-100 dark:bg-gray-800 pb-12">
  <GradientBg />
  <div class="flex justify-end items-center p-4 sticky">
    <ThemeToggle />
  </div>

  <div
    class="flex flex-col items-start gap-10 max-w-3xl lg:max-w-4xl mx-auto px-10"
  >
    <Title />
    <About />
    <Projects />
    <Contact />
  </div>
</main>
