<script lang="ts">
  import {
    ChevronRight,
    Github,
    Moon,
    SlidersHorizontal,
    Sun,
  } from "lucide-svelte";
  import { Button } from "./ui/button";
  import { toggleMode } from "mode-watcher";
  import gsap from "gsap";
  import SiteLogo from "./site-logo.svelte";
  import { onMount } from "svelte";
  import { cn } from "$lib/utils";
  // ---------------------------------------------------- //

  const ANIMATION_EASE = "power1.inOut";
  const ANIMATION_DURATION = 0.225;
  function animateUnderlineEnter(anchorClass: string) {
    gsap.fromTo(
      `.${anchorClass}`,
      { width: 0 },
      {
        width: "100%",
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASE,
        onStart: () => {
          gsap.to(`.${anchorClass}`, { opacity: 1 });
        },
      }
    );
  }
  function animateUnderlineLeave(anchorClass: string) {
    gsap.to(`.${anchorClass}`, {
      width: 0,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
      onComplete: () => {
        gsap.to(`.${anchorClass}`, { opacity: 0 });
      },
    });
  }

  let y = $state(0);
  let atTop = $derived(true);
  onMount(() => {
    const onScroll = () => {
      y = window.scrollY;
      atTop = y === 0;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<header
  class={cn(
    "sticky top-0 bg-background py-4 px-26 flex items-center w-full transition-shadow",
    {
      "border-b border-border shadow-sm": !atTop,
    }
  )}
>
  <SiteLogo />

  <nav class="mx-auto">
    <ul class="flex justify-center gap-6 text-sm text-muted-foreground">
      <li>
        <a
          class="hover:text-foreground transition-colors"
          href="#examples"
          onmouseenter={() => animateUnderlineEnter("examples")}
          onmouseleave={() => animateUnderlineLeave("examples")}
        >
          Examples
        </a>
        {@render Underline("examples")}
      </li>
      <li>
        <a
          class="hover:text-foreground transition-colors"
          href="#features"
          onmouseenter={() => animateUnderlineEnter("features")}
          onmouseleave={() => animateUnderlineLeave("features")}
        >
          Features
        </a>
        {@render Underline("features")}
      </li>
      <li>
        <a
          class="hover:text-foreground transition-colors"
          href="#pricing"
          onmouseenter={() => animateUnderlineEnter("pricing")}
          onmouseleave={() => animateUnderlineLeave("pricing")}
        >
          Pricing
        </a>
        {@render Underline("pricing")}
      </li>
      <li>
        <a
          class="hover:text-foreground transition-colors"
          href="#roadmap"
          onmouseenter={() => animateUnderlineEnter("roadmap")}
          onmouseleave={() => animateUnderlineLeave("roadmap")}
        >
          Roadmap
        </a>
        {@render Underline("roadmap")}
      </li>
      <li>
        <a
          class="hover:text-foreground transition-colors"
          href="#faq"
          onmouseenter={() => animateUnderlineEnter("faq")}
          onmouseleave={() => animateUnderlineLeave("faq")}>FAQ</a
        >
        {@render Underline("faq")}
      </li>
    </ul>
  </nav>

  <div class="flex items-center gap-4 justify-end">
    <Button variant="ghost" class="rounded-sm hover:bg-foreground/10">
      <Github href="https://github.com/Marcus-Adair/tweakcn_clone" />
      8.6k
    </Button>

    <Button
      onclick={toggleMode}
      variant="secondary"
      size="icon-sm"
      class="hover:scale-105 ease-in-out duration-200"
    >
      <Sun class="size-4.5 scale-100 dark:scale-0" />
      <Moon class="absolute size-4.5 scale-0 dark:scale-100" />
    </Button>
    <Button class="hover:scale-105 ease-in-out duration-200">
      Try It Now <ChevronRight />
    </Button>
  </div>
</header>

{#snippet Underline(anchorClass: string)}
  <div class={`${anchorClass} w-full h-[1.5px] bg-foreground opacity-0`}></div>
{/snippet}
