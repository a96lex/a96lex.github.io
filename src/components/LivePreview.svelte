<script lang="ts">
  import { onMount } from "svelte";

  const MAX_DEPTH = 10;
  const nestingDepth =
    typeof window !== "undefined"
      ? Number(new URLSearchParams(window.location.search).get("depth")) || 0
      : 0;
  const showLivePreview = nestingDepth < MAX_DEPTH;

  let iframeContainer: HTMLDivElement;
  let iframeEl: HTMLIFrameElement;
  let iframeScale = 0;
  let iframeHeight = 0;
  let iframeWidth = 0;

  onMount(() => {
    if (!showLivePreview || !iframeContainer) return;

    const update = () => {
      iframeWidth = window.innerWidth;
      iframeScale = iframeContainer.offsetWidth / iframeWidth;
      iframeHeight = Math.round(iframeContainer.offsetHeight / iframeScale);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(iframeContainer);

    const syncScroll = () =>
      iframeEl?.contentWindow?.scrollTo(0, window.scrollY);

    const forwardMouse = (e: MouseEvent) => {
      iframeEl?.contentWindow?.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: true,
          clientX: e.clientX,
          clientY: e.clientY,
        })
      );
    };

    iframeEl?.addEventListener("load", syncScroll);

    window.addEventListener("scroll", syncScroll, { passive: true });
    window.addEventListener("mousemove", forwardMouse);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("mousemove", forwardMouse);
    };
  });
</script>

{#if showLivePreview}
  <div
    bind:this={iframeContainer}
    class="h-full w-full overflow-hidden relative"
  >
    <iframe
      bind:this={iframeEl}
      src={`/?depth=${nestingDepth + 1}`}
      style="width: {iframeWidth}px; height: {iframeHeight}px; transform: scale({iframeScale}); transform-origin: top left; border: none; pointer-events: none;"
      title="Live portfolio preview"
      scrolling="no"
    ></iframe>
  </div>
{:else}
  <slot />
{/if}
