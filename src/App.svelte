<script lang="ts">
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import GradientBg from "./components/GradientBg.svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Work from "./components/Work.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main class="relative min-h-screen bg-stone-50 pb-12 dark:bg-zinc-950">
  <div
    class="fixed right-0 top-0 z-50 flex w-full items-center justify-end md:right-4 md:top-4"
  >
    <ThemeToggle />
  </div>

  <GradientBg />

  <div
    class="relative z-10 mx-auto flex max-w-4xl flex-col items-start gap-14 px-6 pt-20 md:px-10"
  >
    <Hero />
    <About />
    <Work />
    <Projects />
    <Experience />
    <Footer />
  </div>
</main>
