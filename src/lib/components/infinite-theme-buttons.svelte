<script lang="ts">
  import type { Theme } from "$lib/types";
  import { onMount } from "svelte";
  import ThemeButton from "./theme-button.svelte";
  import gsap from "gsap";

  let currentTheme = $state<Theme>("default");

  let infiniteRow1: HTMLDivElement;
  let infiniteRow2: HTMLDivElement;
  let infiniteRow3: HTMLDivElement;
  let loopTween1: gsap.core.Tween;
  let loopTween2: gsap.core.Tween;
  let loopTween3: gsap.core.Tween;
  onMount(() => {
    // Infinite Row animations
    const LOOP_DURATION = 30;
    loopTween1 = gsap.to(infiniteRow1, {
      x: -1176, // length in px of real avatar-cards
      duration: LOOP_DURATION,
      repeat: -1,
      ease: "linear",
    });
    loopTween2 = gsap.to(infiniteRow2, {
      x: -1176, // length in px of real avatar-cards
      duration: LOOP_DURATION,
      repeat: -1,
      ease: "linear",
    });
    loopTween3 = gsap.to(infiniteRow3, {
      x: -1176, // length in px of real avatar-cards
      duration: LOOP_DURATION,
      repeat: -1,
      ease: "linear",
    });
  });
  const PAUSE_EASE = "power2.out";
  const PAUSE_DURATION = 0.4;
  const pauseLoop1 = () => {
    gsap.to(loopTween1, {
      timeScale: 0,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
  const resumeLoop1 = () => {
    gsap.to(loopTween1, {
      timeScale: 1,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
  const pauseLoop2 = () => {
    gsap.to(loopTween2, {
      timeScale: 0,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
  const resumeLoop2 = () => {
    gsap.to(loopTween2, {
      timeScale: 1,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
  const pauseLoop3 = () => {
    gsap.to(loopTween3, {
      timeScale: 0,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
  const resumeLoop3 = () => {
    gsap.to(loopTween3, {
      timeScale: 1,
      duration: PAUSE_DURATION,
      ease: PAUSE_EASE,
    });
  };
</script>

<!-- 
    TODO: Remove default option all-together and put in real themes for all 
-->

<div class="flex justify-center">
  <div class="overflow-hidden max-w-280 flex flex-col relative">
    <div bind:this={infiniteRow1} class="flex mt-17 w-588 pb-6">
      <!-- Real -->

      <ThemeButton
        name="Bold Tech"
        theme="bold-tech"
        onclick={() => {
          currentTheme = "bold-tech";
        }}
        current={currentTheme === "bold-tech"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Caffeine"
        theme="caffeine"
        onclick={() => {
          currentTheme = "caffeine";
        }}
        current={currentTheme === "caffeine"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Notebook"
        theme="notebook"
        onclick={() => {
          currentTheme = "notebook";
        }}
        current={currentTheme === "notebook"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Nature"
        theme="nature"
        onclick={() => {
          currentTheme = "nature";
        }}
        current={currentTheme === "nature"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Claude"
        theme="claude"
        onclick={() => {
          currentTheme = "claude";
        }}
        current={currentTheme === "claude"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Doom 64"
        theme="doom-64"
        onclick={() => {
          currentTheme = "doom-64";
        }}
        current={currentTheme === "doom-64"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Bubblegum"
        theme="bubblegum"
        onclick={() => {
          currentTheme = "bubblegum";
        }}
        current={currentTheme === "bubblegum"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />

      <!-- Clone -->
      <ThemeButton
        name="Bold Tech"
        theme="bold-tech"
        onclick={() => {
          currentTheme = "bold-tech";
        }}
        current={currentTheme === "bold-tech"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Caffeine"
        theme="caffeine"
        onclick={() => {
          currentTheme = "caffeine";
        }}
        current={currentTheme === "caffeine"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Notebook"
        theme="notebook"
        onclick={() => {
          currentTheme = "notebook";
        }}
        current={currentTheme === "notebook"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Nature"
        theme="nature"
        onclick={() => {
          currentTheme = "nature";
        }}
        current={currentTheme === "nature"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Claude"
        theme="claude"
        onclick={() => {
          currentTheme = "claude";
        }}
        current={currentTheme === "claude"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Doom 64"
        theme="doom-64"
        onclick={() => {
          currentTheme = "doom-64";
        }}
        current={currentTheme === "doom-64"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
      <ThemeButton
        name="Bubblegum"
        theme="bubblegum"
        onclick={() => {
          currentTheme = "bubblegum";
        }}
        current={currentTheme === "bubblegum"}
        onmouseenter={() => pauseLoop1()}
        onmouseleave={() => resumeLoop1()}
      />
    </div>

    <!-- Row 2 -->
    <div bind:this={infiniteRow2} class="flex w-588 pb-6">
      <!-- Real -->
      <ThemeButton
        name="Clean Slate"
        theme="clean-slate"
        onclick={() => {
          currentTheme = "clean-slate";
        }}
        current={currentTheme === "clean-slate"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Dark Matter"
        theme="dark-matter"
        onclick={() => {
          currentTheme = "dark-matter";
        }}
        current={currentTheme === "dark-matter"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Mocha"
        theme="mocha"
        onclick={() => {
          currentTheme = "mocha";
        }}
        current={currentTheme === "mocha"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Kodama"
        theme="kodama"
        onclick={() => {
          currentTheme = "kodama";
        }}
        current={currentTheme === "kodama"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Perpetuity"
        theme="perpetuity"
        onclick={() => {
          currentTheme = "perpetuity";
        }}
        current={currentTheme === "perpetuity"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Cyberpunk"
        theme="cyberpunk"
        onclick={() => {
          currentTheme = "cyberpunk";
        }}
        current={currentTheme === "cyberpunk"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Mono"
        theme="mono"
        onclick={() => {
          currentTheme = "mono";
        }}
        current={currentTheme === "mono"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <!-- Clone -->
      <ThemeButton
        name="Clean Slate"
        theme="clean-slate"
        onclick={() => {
          currentTheme = "clean-slate";
        }}
        current={currentTheme === "clean-slate"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Dark Matter"
        theme="dark-matter"
        onclick={() => {
          currentTheme = "dark-matter";
        }}
        current={currentTheme === "dark-matter"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Mocha"
        theme="mocha"
        onclick={() => {
          currentTheme = "mocha";
        }}
        current={currentTheme === "mocha"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Kodama"
        theme="kodama"
        onclick={() => {
          currentTheme = "kodama";
        }}
        current={currentTheme === "kodama"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Perpetuity"
        theme="perpetuity"
        onclick={() => {
          currentTheme = "perpetuity";
        }}
        current={currentTheme === "perpetuity"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Cyberpunk"
        theme="cyberpunk"
        onclick={() => {
          currentTheme = "cyberpunk";
        }}
        current={currentTheme === "cyberpunk"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
      <ThemeButton
        name="Mono"
        theme="mono"
        onclick={() => {
          currentTheme = "mono";
        }}
        current={currentTheme === "mono"}
        onmouseenter={() => pauseLoop2()}
        onmouseleave={() => resumeLoop2()}
      />
    </div>

    <div bind:this={infiniteRow3} class="flex w-588 pb-6">
      <!-- Real -->
      <ThemeButton
        name="T3 Chat"
        theme="t3-chat"
        onclick={() => {
          currentTheme = "t3-chat";
        }}
        current={currentTheme === "t3-chat"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Vercel"
        theme="vercel"
        onclick={() => {
          currentTheme = "vercel";
        }}
        current={currentTheme === "vercel"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Soft Pop"
        theme="soft-pop"
        onclick={() => {
          currentTheme = "soft-pop";
        }}
        current={currentTheme === "soft-pop"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Twitter"
        theme="twitter"
        onclick={() => {
          currentTheme = "twitter";
        }}
        current={currentTheme === "twitter"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Tangerine"
        theme="tangerine"
        onclick={() => {
          currentTheme = "tangerine";
        }}
        current={currentTheme === "tangerine"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Vintage"
        theme="vintage"
        onclick={() => {
          currentTheme = "vintage";
        }}
        current={currentTheme === "vintage"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Modern"
        theme="modern"
        onclick={() => {
          currentTheme = "modern";
        }}
        current={currentTheme === "modern"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <!-- Clone -->
      <ThemeButton
        name="T3 Chat"
        theme="t3-chat"
        onclick={() => {
          currentTheme = "t3-chat";
        }}
        current={currentTheme === "t3-chat"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Vercel"
        theme="vercel"
        onclick={() => {
          currentTheme = "vercel";
        }}
        current={currentTheme === "vercel"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Soft Pop"
        theme="soft-pop"
        onclick={() => {
          currentTheme = "soft-pop";
        }}
        current={currentTheme === "soft-pop"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Twitter"
        theme="twitter"
        onclick={() => {
          currentTheme = "twitter";
        }}
        current={currentTheme === "twitter"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Tangerine"
        theme="tangerine"
        onclick={() => {
          currentTheme = "tangerine";
        }}
        current={currentTheme === "tangerine"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Vintage"
        theme="vintage"
        onclick={() => {
          currentTheme = "vintage";
        }}
        current={currentTheme === "vintage"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
      <ThemeButton
        name="Modern"
        theme="modern"
        onclick={() => {
          currentTheme = "modern";
        }}
        current={currentTheme === "modern"}
        onmouseenter={() => pauseLoop3()}
        onmouseleave={() => resumeLoop3()}
      />
    </div>

    <!-- Fade the sides -->
    <div
      class="pointer-events-none absolute top-0 right-0 h-full w-16 bg-linear-to-l from-background to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute top-0 right-left h-full w-16 bg-linear-to-l from-transparent to-background"
    ></div>
  </div>
</div>
