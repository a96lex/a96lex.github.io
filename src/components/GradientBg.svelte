<script lang="ts">
  import { onMount } from "svelte";

  let gradientStyle = "";

  const updateGradient = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    gradientStyle = `background: radial-gradient(500px at ${x}px ${y}px, currentColor, transparent 70%)`;
  };

  onMount(() => {
    window.addEventListener("mousemove", updateGradient);

    return () => {
      window.removeEventListener("mousemove", updateGradient);
    };
  });
</script>

<div
  class="pointer-events-none fixed inset-0 z-30 lg:absolute text-blue-300 dark:text-blue-700 opacity-10"
  style={gradientStyle}
></div>
