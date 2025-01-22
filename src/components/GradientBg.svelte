<script lang="ts">
  import { onMount } from "svelte";

  let gradientStyle = "";
  let opacity = "opacity-0";

  const updateGradient = (x: number, y: number) => {
    opacity = "opacity-20";
    gradientStyle = `background: radial-gradient(500px at ${x}px ${y}px, currentColor, transparent 70%)`;
  };

  const removeBg = () => {
    opacity = "opacity-0";
  };

  onMount(() => {
    const handleMouseMove = (event: MouseEvent) => {
      updateGradient(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        updateGradient(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", removeBg);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", removeBg);
    };
  });
</script>

<div
  class={`fixed inset-0 text-orange-400 dark:text-blue-600 ${opacity} z-0`}
  style={gradientStyle}
></div>
