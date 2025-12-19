<script lang="ts">
  import FAQ from "$lib/components/faq.svelte";
  import IconCard from "$lib/components/icon-card.svelte";
  import SectionBadge from "$lib/components/section-badge.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { Button } from "$lib/components/ui/button";
  import {
    ArrowRight,
    ArrowRightLeft,
    BrainCircuit,
    Check,
    Circle,
    Code,
    Contrast,
    FileCode,
    Folder,
    Gem,
    Grid3X3,
    Layers,
    Paintbrush,
    Palette,
    Users,
  } from "lucide-svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import AvatarCard from "$lib/components/avatar-card.svelte";
  import { cn } from "$lib/utils";
  import { MAX_WIDTH_CLASS } from "$lib/consts";

  let visualThemeEditor: HTMLDivElement;
  let themePresets: HTMLDivElement;
  let testimonials: HTMLDivElement;
  let features: HTMLDivElement;
  let howItWorks: HTMLDivElement;
  let roadmap: HTMLDivElement;
  let faq: HTMLDivElement;

  let infiniteRow1: HTMLDivElement;
  let loopTween1: gsap.core.Tween;
  let infiniteRow2: HTMLDivElement;
  let loopTween2: gsap.core.Tween;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const BASE_SCROLL_TRIGGER = { start: "top+=20px bottom" };
    const BASE_FADE_IN_ANIMATION = {
      opacity: 0,
      duration: 0.85,
      ease: "power1.inOut",
    };

    [
      visualThemeEditor,
      themePresets,
      testimonials,
      features,
      howItWorks,
      roadmap,
      faq,
    ].forEach((divElt) => {
      gsap.from(divElt, {
        scrollTrigger: {
          trigger: divElt,
          ...BASE_SCROLL_TRIGGER,
        },
        ...BASE_FADE_IN_ANIMATION,
      });
    });

    loopTween1 = gsap.to(infiniteRow1, {
      x: -1504, // length in px of real avatar-cards
      duration: 60,
      repeat: -1,
      ease: "linear",
      // modifiers: {
      //   x: gsap.utils.unitize((x) => parseFloat(x) % 376),
      // },
    });
    loopTween2 = gsap.to(infiniteRow2, {
      x: 1504, // length in px of real avatar-cards
      duration: 60,
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 376),
      },
    });
  });
  const pauseLoop1 = () => {
    gsap.to(loopTween1, {
      timeScale: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const resumeLoop1 = () => {
    gsap.to(loopTween1, {
      timeScale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const pauseLoop2 = () => {
    gsap.to(loopTween2, {
      timeScale: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const resumeLoop2 = () => {
    gsap.to(loopTween2, {
      timeScale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };
</script>

<div id="examples" class="px-32">
  <!-- Visual Theme Editor -->
  <div class="flex justify-center">
    <div bind:this={visualThemeEditor} class="mt-34 px-10 flex flex-col gap-4">
      <SectionBadge label="Visual Theme Editor" />

      <h1 class="text-5xl font-extrabold tracking-tight">
        Design Your <span class="italic font-light">Perfect</span>
        <Circle class="inline size-13" /> shadcn/ui Theme
      </h1>

      <span
        class="text-lg font-light text-muted-foreground tracking-tight mt-1"
      >
        Customize colors, typography, and layouts with a real-time preview. No
        signup required.
      </span>

      <div class="flex gap-4 mt-5">
        <Button
          size="xl"
          class="hover:-translate-y-1 ease-in-out duration-200"
          href="https://tweakcn.com/editor/theme"
          target="_blank"
        >
          Start Customizing <ArrowRight class="size-4.5 ml-2" />
        </Button>
        <Button
          size="xl"
          variant="outline"
          class="hover:-translate-y-1 ease-in-out duration-200"
        >
          View Examples
        </Button>
      </div>

      <div class="flex gap-5.5 text-sm text-muted-foreground mt-4">
        <div class="flex gap-1.5 items-center">
          <Check class="text-muted-foreground size-5" /> Real-time Preview
        </div>
        <div class="flex gap-1.5 items-center">
          <Check class="text-muted-foreground size-5" /> Export to Tailwind
        </div>
        <div class="flex gap-1.5 items-center">
          <Check class="text-muted-foreground size-5" /> Beautiful Presets
        </div>
      </div>
    </div>
  </div>

  <!-- Theme presets -->
  <div
    bind:this={themePresets}
    class="mt-64 px-10 flex flex-col items-center animate-in-section"
  >
    <SectionHeading
      label="Theme Presets"
      title="Elevate Your Design Instantly"
      subtitle="Apply theme presets with a single click. See how each option enhances the
      look."
    />

    <!-- TODO: add animated theme switcher thing -->

    <!-- TODO: add email thing -->
  </div>

  <!-- Testimonials -->
  <div bind:this={testimonials} class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Testimonials"
      title="Loved by developers worldwide"
      subtitle="See what the community is saying about tweakcn"
    />
  </div>

  <!-- 
  overflow-hidden 
  gap-4 p-6 
  -->

  <div class="flex justify-center">
    <div class="flex flex-col">
      <div class={"relative overflow-hidden w-280"}>
        <div
          bind:this={infiniteRow1}
          id="infiniteRow1"
          class="flex mt-17 w-752 pb-6"
        >
          <AvatarCard
            name="tweakcn_clone"
            handle="tweakcn_clone"
            tweet="Shout out to the real tweakcn.com, its an awesome website that I use!! And shout out to all the people that worked on shadcn and shadcn-svelte component libraries."
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />

          <AvatarCard
            name="clone_cnTweak"
            handle="www_clonecntweak"
            tweet="This app was built using TypesScript, SvelteKit, shadcn-svelte, GSAP, HTML/CSS, and more. Try hovering over different buttons and things to see animations."
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />

          <AvatarCard
            name="Chadcn"
            handle="chadcn"
            tweet="Tweakcn_clone is really cool. It look likes the real website!!"
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />
          <AvatarCard
            name="Anon User"
            handle="anonuser007"
            tweet="If you are reading this then hover over this Card and the movement will stop :)"
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />

          <!-- ------------------------------------------------------------------- -->
          <!-- Clone -->
          <AvatarCard
            name="tweakcn_clone"
            handle="tweakcn_clone"
            tweet="Shout out to the real tweakcn.com, its an awesome website that I use!! And shout out to all the people that worked on shadcn and shadcn-svelte component libraries."
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />

          <AvatarCard
            name="clone_cnTweak"
            handle="www_clonecntweak"
            tweet="This app was built using TypesScript, SvelteKit, shadcn-svelte, GSAP, HTML/CSS, and more. Try hovering over different buttons and things to see animations."
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />

          <AvatarCard
            name="Chadcn"
            handle="chadcn"
            tweet="Tweakcn_clone is really cool. It look likes the real website!!"
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />
          <AvatarCard
            name="Anon User"
            handle="anonuser007"
            tweet="If you are reading this then hover over this Card and the movement will stop :)"
            pauseLoop={pauseLoop1}
            resumeLoop={resumeLoop1}
          />
        </div>

        <!-- Fade the sides -->

        <!-- <div
          class="pointer-events-none absolute top-0 right-0 h-full w-20 bg-linear-to-l from-background to-transparent"
        ></div>
        <div
          class="pointer-events-none absolute top-0 right-left h-full w-20 bg-linear-to-l from-transparent to-background"
        ></div> -->
      </div>
      <!-- 2nd row -->
      <div class={"relative overflow-hidden w-280"}>
        <!-- Clones -->
        <div bind:this={infiniteRow2} id="infiniteRow2" class="flex w-752 pb-6">
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <!-- ------------------------------------------------------------------- -->
          <!-- Real -->
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="shadcn"
            handle="shadcn"
            tweet="This is a decriptions fsdaa .. sTODTO "
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
        </div>
      </div>

      <!-- Fade the sides -->

      <!-- <div
        class="pointer-events-none absolute top-0 right-0 h-full w-20 bg-linear-to-l from-background to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute top-0 right-left h-full w-20 bg-linear-to-l from-transparent to-background"
      ></div> -->
    </div>
  </div>
</div>

<div bind:this={features} id="features">
  <!-- Features -->
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Features"
      title="Powerful Customization Tools"
      subtitle="All the tools you need to customize your shadcn/ui components and make them unique."
    />
  </div>

  <div class="flex justify-center">
    <div
      class={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-26 mt-17",
        MAX_WIDTH_CLASS
      )}
    >
      <IconCard
        icon={Paintbrush}
        title="Color Control"
        description="Customize background, text, and border colors with an intuitive color picker interface. We even integrate with the latest Tailwind v4 color palette."
      />
      <IconCard
        icon={FileCode}
        title="Typography Settings"
        description="Fine-tune font size, weight, and text transform to create the perfect look."
      />
      <IconCard
        icon={Code}
        title="Tailwind v4 & v3 Support"
        description="Seamlessly switch between Tailwind v4 and v3, with support for multiple color formats including OKLCH & HSL."
      />
      <IconCard
        icon={Layers}
        title="Tailwind Properties"
        description="Fine-tune every aspect of your components with precise control over radius, spacing, shadows, and other Tailwind properties."
      />
      <IconCard
        icon={Contrast}
        title="Contrast Checker"
        description="Ensure your designs meet accessibility standards with built-in contrast ratio checking between text and background colors."
      />
      <IconCard
        icon={BrainCircuit}
        title="AI Theme Generation"
        badgeLabel={ProBadgeLabel}
        description="Create stunning, ready-to-use themes in seconds. Just provide an image or a text prompt, and our AI does the rest."
      />
    </div>
  </div>
</div>

<!-- How it works -->
<div bind:this={howItWorks} class="mt-64 px-10 flex flex-col items-center">
  <SectionHeading
    label="How It Works"
    title="Simple Process, Beautiful Results"
    subtitle="Customize your shadcn/ui components in just a few simple steps."
  />
</div>

<div bind:this={roadmap} id="roadmap">
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Roadmap"
      title="What's Coming Next"
      subtitle="We're constantly working to improve tweakcn and add new features. Here's what's on our roadmap."
    />
  </div>

  <div class="flex justify-center">
    <div
      class={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-26 mt-17",
        MAX_WIDTH_CLASS
      )}
    >
      <IconCard
        icon={Palette}
        title="Global Theme Editor"
        badgeLabel="Done"
        description="Create and manage complete themes with presets fr your entire application."
      />
      <IconCard
        icon={ArrowRightLeft}
        title="Theme Import/Export"
        badgeLabel="Done"
        description="Save and share your custom themes with others."
      />
      <IconCard
        icon={Layers}
        title="AI Theme Generation"
        badgeLabel="In Progress"
        description="Generate and customize themes with AI assistance, making theme creation faster and more intuitive."
      />

      <IconCard
        icon={Users}
        title="Community Themes"
        badgeLabel="Coming Soon"
        description="Allow users to submit themes, vote on the best designs."
      />
      <IconCard
        icon={Folder}
        title="Multi-Project Management"
        badgeLabel="Planned"
        description="Save and manage multiple theme projects, making it easy to switch between designs."
      />
      <IconCard
        icon={Grid3X3}
        title="Smart Theme Generator"
        badgeLabel="Planned"
        description="Generate beautiful themes from a single color, color pair, or even an image. Expand your customization options with AI-powered theme generation."
      />
    </div>
  </div>
</div>

<FAQ bind:faq />

<div
  class="w-full h-auto bg-slate-400 font-semibold text-center px-4 py-30 flex flex-col gap-8"
>
  <p class="text-5xl text-primary-foreground font-bold tracking-tight">
    Ready to Make Your Components Stand Out?
  </p>
  <span
    class="text-lg font-light text-primary-foreground tracking-tight mt-1 text-center"
  >
    Start customizing your shadcn/ui components today and create a unique look
    for your application.
  </span>

  <div class="flex gap-4 mt-5 justify-center">
    <Button size="xl" class="hover:-translate-y-1 ease-in-out duration-200">
      Try It Now<ArrowRight class="size-4.5 ml-2" />
    </Button>
    <Button
      size="xl"
      variant="outline"
      class="hover:-translate-y-1 ease-in-out duration-200 bg-transparent text-primary-foreground"
    >
      View on GitHub
    </Button>
  </div>

  <span class="text-primary-foreground text-sm font-light">
    No login required. Free to use. Open source.
  </span>
</div>

<!-- Snippets -->
{#snippet ProBadgeLabel()}
  <div class="flex items-center gap-2">
    <span>Pro</span>
    <Gem class="size-2.5" />
  </div>
{/snippet}
