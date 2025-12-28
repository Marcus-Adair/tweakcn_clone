<script lang="ts">
  import { ChevronRight, Github, Moon, Sun } from "lucide-svelte";
  import { Button } from "./ui/button";
  import { toggleMode } from "mode-watcher";
  import gsap from "gsap";
  import SiteLogo from "./site-logo.svelte";
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";
  import { MAX_WIDTH_CLASS } from "$lib/consts";
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

    console.log("inside of onmount!!!!!");

    function animateInAnchors() {
      const tl = gsap.timeline();

      const DURATION = 0.45;
      const EASE = "power1.out";
      const Y = -35;
      tl.from(".examples", {
        y: Y,
        duration: DURATION,
        opacity: 0,
        ease: EASE,
      });
      tl.from(
        ".features",
        { y: Y, duration: DURATION, opacity: 0, ease: EASE },
        "-=0.24"
      );
      tl.from(
        ".pricing",
        { y: Y, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
      tl.from(
        ".roadmap",
        { y: Y, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
      tl.from(
        ".faq",
        { y: Y, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
      tl.from(
        ".github",
        { scale: 0, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
      tl.from(
        ".theme-toggle",
        { scale: 0, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
      tl.from(
        ".try-it-now",
        { scale: 0, duration: DURATION, opacity: 0, ease: EASE },
        "<"
      );
    }
    animateInAnchors();

    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<header
  class={cn("flex justify-center sticky top-0 bg-background z-100", {
    "border-b border-border shadow-sm": !atTop,
  })}
>
  <div
    class={cn(
      "py-4 px-26 flex items-center w-full transition-shadow z-60",

      MAX_WIDTH_CLASS
    )}
  >
    <SiteLogo />

    <nav class="mx-auto">
      <ul class="flex justify-center gap-6 text-sm text-muted-foreground">
        <li>
          <div class="examples">
            <a
              class="examples hover:text-foreground transition-colors"
              href="#examples"
              onmouseenter={() => animateUnderlineEnter("examples-underline")}
              onmouseleave={() => animateUnderlineLeave("examples-underline")}
            >
              Examples
            </a>

            {@render Underline("examples-underline")}
          </div>
        </li>
        <li>
          <div class="features">
            <a
              class="features hover:text-foreground transition-colors"
              href="#features"
              onmouseenter={() => animateUnderlineEnter("features-underline")}
              onmouseleave={() => animateUnderlineLeave("features-underline")}
            >
              Features
            </a>

            {@render Underline("features-underline")}
          </div>
        </li>
        <li>
          <div class="pricing">
            <a
              class="pricing hover:text-foreground transition-colors"
              href="#pricing"
              onmouseenter={() => animateUnderlineEnter("pricing-underline")}
              onmouseleave={() => animateUnderlineLeave("pricing-underline")}
            >
              Pricing
            </a>

            {@render Underline("pricing-underline")}
          </div>
        </li>
        <li>
          <div class="roadmap">
            <a
              class="roadmap hover:text-foreground transition-colors"
              href="#roadmap"
              onmouseenter={() => animateUnderlineEnter("roadmap-underline")}
              onmouseleave={() => animateUnderlineLeave("roadmap-underline")}
            >
              Roadmap
            </a>

            {@render Underline("roadmap-underline")}
          </div>
        </li>
        <li>
          <div class="faq">
            <a
              class="faq hover:text-foreground transition-colors"
              href="#faq"
              onmouseenter={() => animateUnderlineEnter("faq-underline")}
              onmouseleave={() => animateUnderlineLeave("faq-underline")}>FAQ</a
            >

            {@render Underline("faq-underline")}
          </div>
        </li>
      </ul>
    </nav>

    <div class="flex items-center gap-4 justify-end">
      <div class="github">
        <Button variant="ghost" class="rounded-sm hover:bg-foreground/10">
          <Github href="https://github.com/Marcus-Adair/tweakcn_clone" />
          8.6k
        </Button>
      </div>

      <div class="theme-toggle">
        <Button
          onclick={toggleMode}
          variant="secondary"
          size="icon-sm"
          class="hover:scale-105 ease-in-out duration-200"
        >
          <Sun class="size-4.5 scale-100 dark:scale-0" />
          <Moon class="absolute size-4.5 scale-0 dark:scale-100" />
        </Button>
      </div>
      <div class="try-it-now">
        <Button class="hover:scale-105 ease-in-out duration-200">
          Try It Now <ChevronRight />
        </Button>
      </div>
    </div>
  </div>
</header>

{#snippet Underline(anchorClass: string)}
  <div class={`${anchorClass} w-full h-[1.5px] bg-primary opacity-0`}></div>
{/snippet}
