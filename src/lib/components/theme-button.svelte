<script lang="ts">
  import type { Theme } from "$lib/types";
  import { cn } from "$lib/utils";
  import { setTheme } from "./theme-watcher.svelte";
  import gsap from "gsap";

  interface Props {
    name: string;
    theme: Theme;
    onclick: () => void;
    current: boolean;
    onmouseenter: () => void;
    onmouseleave: () => void;
  }
  let { name, theme, onclick, current, onmouseenter, onmouseleave }: Props =
    $props();

  let btn: HTMLButtonElement;
  function animate(animIn: boolean) {
    const toValue = animIn ? -4 : 0;
    const scaleValue = animIn ? 1.01 : 1;

    const toBoxShadow = animIn
      ? "0px 3px 5px rgba(0,0,0,0.2)"
      : "0px 0px 0px rgba(0,0,0,0)";

    const DURATION = 0.25;
    gsap.to(btn, {
      y: toValue,
      duration: DURATION,
      ease: "power1.inOut",
    });
    gsap.to(btn, {
      scale: scaleValue,
      duration: DURATION,
      ease: "power1.inOut",
    });
    gsap.to(btn, {
      boxShadow: toBoxShadow,
      duration: DURATION,
      ease: "power2.out",
    });
  }

  // const dark = document.documentElement.classList.contains("dark");
  // let isDarkMode = $state(dark);
</script>

<button
  bind:this={btn}
  onmouseenter={() => {
    animate(true);
    onmouseenter();
  }}
  onmouseleave={() => {
    animate(false);
    onmouseleave();
  }}
  onclick={() => {
    // isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(theme);
    onclick();
  }}
  class={cn(
    "flex items-center justify-center gap-4 bg-muted w-40 py-1 rounded-sm cursor-pointer mr-2",
    { "border-3 border-border": current },
    theme
    // { dark: isDarkMode }
  )}
>
  <div class="flex items-center gap-1">
    <div class="h-3 w-3 rounded-full bg-primary"></div>
    <div class="h-3 w-3 rounded-full bg-secondary"></div>
    <div class="h-3 w-3 rounded-full bg-accent"></div>
  </div>
  <span>{name}</span>
</button>
