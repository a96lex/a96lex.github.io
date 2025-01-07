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
  class="pointer-events-none fixed inset-0 text-red-400 dark:text-blue-600 opacity-15"
  style={gradientStyle}
></div>
