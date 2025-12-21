<script lang="ts">
  import { ABSOLUTE_CENTER_CLASS } from "$lib/consts";
  import { cn } from "$lib/utils";
  import gsap from "gsap";
  import { onMount } from "svelte";

  interface Props {
    numLabel: string;
    title: string;
    description: string;
  }
  let { numLabel, title, description }: Props = $props();

  let animatedCircleDiv: HTMLDivElement;
  onMount(() => {
    const DURATION = 2.5;
    const REPEAT_DELAY = 1.6;
    gsap.from(animatedCircleDiv, {
      scale: 0.2,
      duration: DURATION,
      repeat: -1,
      repeatDelay: REPEAT_DELAY,
    });
    gsap.to(animatedCircleDiv, {
      opacity: 0,
      duration: DURATION,
      ease: "power1.in",
      repeat: -1,
      repeatDelay: REPEAT_DELAY,
    });
  });
</script>

<div class="flex flex-col items-center gap-3 tracking-wider">
  <!-- Circle -->

  <div class="relative">
    <div class="absolute">
      <div
        class={cn(
          "relative z-20 w-16 h-16 bg-linear-to-br from-50% from-primary to-primary/50 text-primary-foreground rounded-full shadow-md",
          ABSOLUTE_CENTER_CLASS
        )}
      >
        <span class={cn("text-lg font-bold z-10", ABSOLUTE_CENTER_CLASS)}>
          {numLabel}
        </span>
      </div>
    </div>
    <div
      bind:this={animatedCircleDiv}
      class={cn("w-27 h-27 rounded-full bg-primary/15", ABSOLUTE_CENTER_CLASS)}
    ></div>
  </div>

  <span class="font-bold text-lg mt-11 z-40">{title}</span>

  <span
    class="max-w-95 mt-1 text-center text-muted-foreground font-light leading-5.5 z-40"
    >{description}</span
  >
</div>
