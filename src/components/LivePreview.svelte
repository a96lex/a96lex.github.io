<script lang="ts">
  import { onMount } from "svelte";

  const MAX_DEPTH = 6;
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
      iframeWidth = Math.max(window.innerWidth);
      iframeScale = iframeContainer.offsetWidth / iframeWidth;
      iframeHeight = Math.round(240 / iframeScale);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(iframeContainer);

    const syncScroll = () =>
      iframeEl?.contentWindow?.scrollTo(0, window.scrollY);
    const syncTheme = () =>
      iframeEl?.contentWindow?.document.documentElement.classList.toggle(
        "dark",
        document.documentElement.classList.contains("dark")
      );

    const mo = new MutationObserver(syncTheme);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const forwardMouse = (e: MouseEvent) => {
      iframeEl?.contentWindow?.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: true,
          clientX: e.clientX,
          clientY: e.clientY,
        })
      );
    };

    iframeEl?.addEventListener("load", () => {
      syncScroll();
      syncTheme();
    });

    window.addEventListener("scroll", syncScroll, { passive: true });
    window.addEventListener("mousemove", forwardMouse);

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("mousemove", forwardMouse);
    };
  });
</script>

{#if showLivePreview}
  <div
    bind:this={iframeContainer}
    class="rounded-md w-[65%] lg:w-2/5 h-60 overflow-hidden relative border border-gray-200 dark:border-gray-700 mx-auto lg:mx-0"
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
