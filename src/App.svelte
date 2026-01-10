<script lang="ts">
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import GradientBg from "./components/GradientBg.svelte";
  import About from "./components/About.svelte";
  import Title from "./components/Title.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
  import Contact from "./components/Contact.svelte";
  import { personal, client } from "./data/projects.js";
</script>

<main class="min-h-screen bg-gray-100 dark:bg-gray-800 pb-12 relative">
  <div
    class="flex justify-end items-center fixed top-0 md:top-4 md:right-4 right-0 w-full z-50 pointer-events-auto"
  >
    <ThemeToggle />
  </div>

  <GradientBg />

  <div
    class="flex flex-col items-start gap-10 max-w-3xl lg:max-w-4xl mx-auto px-10 relative z-10 pt-20"
  >
    <Title />
    <About />
    <Projects
      projects={client}
      title="Client projects"
      description="Since I became a freelancer, I have worked for several companies. Here is a representative sample."
    />
    <Projects
      projects={personal}
      title="Personal projects"
      description="Here is a sample of personal projects that I have developed in the past years."
    />
    <Experience />
    <Contact />
  </div>
</main>
