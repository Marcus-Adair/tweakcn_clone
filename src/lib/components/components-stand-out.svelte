<script lang="ts">
  import { ArrowRight } from "lucide-svelte";
  import CssGrid from "./CssGrid.svelte";
  import { Button } from "./ui/button";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  const BASE_SCROLL_TRIGGER = { start: "top+=45px bottom" };
  const BASE_FADE_IN_ANIMATION = {
    y: 18,
    opacity: 0,
    duration: 0.85,
    ease: "power1.inOut",
  };

  let titleSpan: HTMLSpanElement;
  let subtitleSpan: HTMLSpanElement;
  let buttonsDiv: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const tl = gsap.timeline();
    [titleSpan, subtitleSpan, buttonsDiv].forEach((elt) => {
      gsap.from(elt, {
        scrollTrigger: {
          trigger: elt,
          ...BASE_SCROLL_TRIGGER,
        },
        ...BASE_FADE_IN_ANIMATION,
      });
    });
  });
</script>

<div
  class="w-full h-auto font-semibold text-center px-4 py-30 flex flex-col gap-8 relative"
>
  <CssGrid alt />

  <div class="flex flex-col gap-8 z-20">
    <!-- <div class="z-20"> -->
    <span
      bind:this={titleSpan}
      class="text-5xl text-primary-foreground font-bold tracking-tight"
    >
      Ready to Make Your Components Stand Out?
    </span>
    <span
      bind:this={subtitleSpan}
      class="text-lg font-light text-primary-foreground tracking-tight mt-1 text-center"
    >
      Start customizing your shadcn/ui components today and create a unique look
      for your application.
    </span>

    <div bind:this={buttonsDiv} class="flex gap-4 mt-5 justify-center">
      <Button
        variant="secondary"
        size="xl"
        class="hover:-translate-y-1 ease-in-out duration-200"
      >
        Try It Now<ArrowRight class="size-4.5 ml-2" />
      </Button>
      <Button
        size="xl"
        class="hover:-translate-y-1 ease-in-out duration-200 bg-transparent border border-primary-foreground"
      >
        View on GitHub
      </Button>
    </div>

    <span class="text-primary-foreground text-sm font-light tracking-wide">
      No login required. Free to use. Open source.
    </span>
  </div>
</div>
