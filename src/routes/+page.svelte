<script lang="ts">
  import FAQ from "$lib/components/faq.svelte";
  import IconCard from "$lib/components/icon-card.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { Button } from "$lib/components/ui/button";
  import {
    ArrowRightLeft,
    BrainCircuit,
    Circle,
    Code,
    Contrast,
    Copy,
    Eye,
    FileCode,
    Folder,
    Gem,
    Grid3X3,
    Layers,
    Paintbrush,
    Palette,
    RefreshCcw,
    SlidersHorizontal,
    SquarePen,
    Star,
    Users,
  } from "lucide-svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import AvatarCard from "$lib/components/avatar-card.svelte";
  import { cn } from "$lib/utils";
  import { ABSOLUTE_CENTER_CLASS, MAX_WIDTH_CLASS } from "$lib/consts";
  import AnimatedCircle from "$lib/components/animated-circle.svelte";
  import CssGrid from "$lib/components/CssGrid.svelte";
  import InfiniteThemeButtons from "$lib/components/infinite-theme-buttons.svelte";
  import CheckmarkSection from "$lib/components/checkmark-section.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import EmailInbox from "$lib/components/email-inbox.svelte";
  import ChartLine1 from "$lib/components/chart-line-1.svelte";
  import ComponentsStandOut from "$lib/components/components-stand-out.svelte";
  import Header from "$lib/components/header.svelte";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  let visualThemeEditor: HTMLDivElement;
  let themePresets: HTMLDivElement;
  let testimonials: HTMLDivElement;
  let features: HTMLDivElement;
  let proFeatures: HTMLDivElement;
  let howItWorks: HTMLDivElement;
  let roadmap: HTMLDivElement;
  let faq: HTMLDivElement;

  let infiniteRow1: HTMLDivElement;
  let loopTween1: gsap.core.Tween;
  let infiniteRow2: HTMLDivElement;
  let loopTween2: gsap.core.Tween;

  // Roadmap IconCard refs
  let roadmapCard1: HTMLDivElement;
  let roadmapCard2: HTMLDivElement;
  let roadmapCard3: HTMLDivElement;
  let roadmapCard4: HTMLDivElement;
  let roadmapCard5: HTMLDivElement;
  let roadmapCard6: HTMLDivElement;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const BASE_SCROLL_TRIGGER = { start: "top+=45px bottom" };
    const BASE_FADE_IN_ANIMATION = {
      y: 10,
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
      // ScrollTrigger heading fade in animation
      gsap.from(divElt, {
        scrollTrigger: {
          trigger: divElt,
          ...BASE_SCROLL_TRIGGER,
        },
        ...BASE_FADE_IN_ANIMATION,
      });
    });

    // Infinite Row animations
    const LOOP_DURATION = 70;
    loopTween1 = gsap.to(infiniteRow1, {
      x: -1504, // length in px of real avatar-cards
      duration: LOOP_DURATION,
      repeat: -1,
      ease: "linear",
    });
    loopTween2 = gsap.to(infiniteRow2, {
      x: 1504, // length in px of real avatar-cards
      duration: LOOP_DURATION,
      repeat: -1,
      ease: "linear",
    });

    // Shared IconCard animation config
    const ICON_CARD_SCROLL_TRIGGER = { start: "top+=600px bottom" };
    const ICON_CARD_ANIMATION = {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    };
    const ICON_CARD_STAGGER = 0.12;

    // Roadmap IconCards staggered fade-in animation
    const roadmapCards = [
      roadmapCard1,
      roadmapCard2,
      roadmapCard3,
      roadmapCard4,
      roadmapCard5,
      roadmapCard6,
    ];

    const roadmapTl = gsap.timeline({
      scrollTrigger: {
        trigger: roadmap,
        ...ICON_CARD_SCROLL_TRIGGER,
      },
    });
    roadmapCards.forEach((card, index) => {
      roadmapTl.from(card, ICON_CARD_ANIMATION, index * ICON_CARD_STAGGER);
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

<div id="examples" class="examples-scroll-div">
  <div class="flex justify-center">
    <div class={cn("flex grow items-center px-14", MAX_WIDTH_CLASS)}>
      <CheckmarkSection
        bind:divElt={visualThemeEditor}
        badgeLabel="Visual Theme Editor"
        title={VisThemEditorTitle}
        subtitle="Customize colors, typography, and layouts with a real-time preview. No signup required."
        btn1Label="Start Customizing"
        btn2Label="View Examples"
        check1Str="Real-time Preview"
        check2Str="Export to Tailwind"
        check3Str="Beautiful Presets"
      />

      {@render ColorPaletteThing()}
    </div>
  </div>

  <!-- Visual Theme Editor -->

  <!-- Theme presets -->
  <div
    id="theme-presets"
    bind:this={themePresets}
    class={"mt-64 flex flex-col items-center animate-in-section"}
  >
    <SectionHeading
      label="Theme Presets"
      title="Elevate Your Design Instantly"
      subtitle="Apply theme presets with a single click. See how each option enhances the
      look."
    />

    <InfiniteThemeButtons />

    <div class="w-screen p-4 flex sm:hidden mt-10">
      <div
        class="flex flex-col w-full gap-4 border border-border rounded-lg p-4 shadow-xl"
      >
        <ChartLine1
          topDescription="Total Revenue"
          title="$15,231.89"
          subtitle="+20.1% from last month"
        />
        <ChartLine1
          topDescription="Subscriptions"
          title="+2,350"
          subtitle="+180.1% from last month"
        />
      </div>
    </div>

    <div
      class="flex-col gap-4 border border-border rounded-lg p-4 bg-card hidden sm:flex lg:hidden mt-6 mb-0 shadow-xl"
    >
      <div class="flex gap-4 w-170">
        <ChartLine1
          topDescription="Total Revenue"
          title="$15,231.89"
          subtitle="+20.1% from last month"
        />
        <ChartLine1
          topDescription="Subscriptions"
          title="+2,350"
          subtitle="+180.1% from last month"
        />
      </div>

      <div
        class="flex flex-col justify-between gap-4 border border-border p-4 rounded-lg"
      >
        <div class="flex justify-between">
          <div class="flex flex-col gap-2 max-w-137">
            <span>tweakcn_clone</span>
            <span
              >A copy of the front-end website for a visual editor for shadcn/ui
              components with beautiful themes. Open Source.</span
            >
          </div>

          <Button variant="secondary" class="rounded-sm"><Star />Star</Button>
        </div>

        <div class="flex gap-8 items-center text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>TypeScript</span>
          </div>

          <div class="flex items-center gap-1">
            <Star class="size-4" />
            <span>20k</span>
          </div>
          <span> Updated December 2025</span>
        </div>
      </div>
    </div>

    <div class={cn("w-full max-w-280 hidden lg:flex")}>
      <EmailInbox />
    </div>
  </div>

  <!-- Testimonials -->
  <div bind:this={testimonials} class="mt-50 px-10 flex flex-col items-center">
    <SectionHeading
      label="Testimonials"
      title="Loved by developers worldwide"
      subtitle="See what the community is saying about tweakcn_clone"
    />
  </div>

  <div class="flex justify-center">
    <div class="flex flex-col relative">
      <div class={"overflow-hidden max-w-280"}>
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
      </div>
      <!-- 2nd row -->
      <div class={"relative overflow-hidden max-w-280"}>
        <!-- Clones -->
        <div
          bind:this={infiniteRow2}
          id="infiniteRow2"
          class="flex w-752 pb-6 -translate-x-376"
        >
          <AvatarCard
            name="Bob Jimmy"
            handle="user123473"
            tweet="I just visited tweakcn_clone and seems like you nailed it. I will definitely try out tweakcn."
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="Sierra Warren"
            handle="high_sierra"
            tweet="Tweakcn is really cool. Custom shadcn themes on the fly."
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="Tim Goldenlock"
            handle="timmyg"
            tweet="Used this shadcn theme editor for a little less pain: tweakcn.com"
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="SharkDev"
            handle="thesharkdevfake"
            tweet="GSAP provides some awesome animations! That is what is being using in combination with actual tweakcn themes"
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <!-- ------------------------------------------------------------------- -->
          <!-- Real -->
          <AvatarCard
            name="Bob Jimmy"
            handle="user123473"
            tweet="I just visited tweakcn_clone and seems like you nailed it. I will definitely try out tweakcn."
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="Sierra Warren"
            handle="high_sierra"
            tweet="Tweakcn is really cool. Custom shadcn themes on the fly."
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="Tim Goldenlock"
            handle="timmyg"
            tweet="Used this shadcn theme editor for a little less pain: tweakcn.com"
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
          <AvatarCard
            name="SharkDev"
            handle="thesharkdevfake"
            tweet="GSAP provides some awesome animations! That is what is being using in combination with actual tweakcn themes"
            pauseLoop={pauseLoop2}
            resumeLoop={resumeLoop2}
          />
        </div>
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
</div>

<div bind:this={features} id="features" class="features-scroll-div">
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

  <div class="relative mt-20 pb-10 w-screen overflow-hidden">
    <CssGrid divClass="-skew-12 bg-transparent translate-x-50 translate-y-14" />

    <div class={cn("flex justify-center")}>
      <div class={cn("flex grow gap-2 items-center px-14", MAX_WIDTH_CLASS)}>
        <CheckmarkSection
          bind:divElt={proFeatures}
          badgeLabel="Pro Features"
          title={ProFeaturesTitle}
          subtitle="Create stunning ready-to-use themes. Just provide an image or text prompt, and our AI does the rest."
          btn1Label="Try It Free"
          btn2Label="Get Pro"
          check1Str="Theme Preview"
          check2Str="Checkpoint Restoration"
          check3Str="Image Uploads"
        />

        {@render MockChat()}
      </div>
    </div>

    <div
      class="pointer-events-none absolute top-0 h-16 w-full bg-linear-to-b from-background to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute bottom-0 h-10 w-full bg-linear-to-t from-background to-transparent"
    ></div>
  </div>
</div>

<!-- How it works -->
<div
  bind:this={howItWorks}
  class={cn("mt-54 px-10 flex flex-col items-center relative py-24 pb-8")}
>
  <CssGrid />

  <SectionHeading
    label="How It Works"
    title="Simple Process, Beautiful Results"
    subtitle="Customize your shadcn/ui components in just a few simple steps."
  />

  <div class="flex items-center mt-22 mb-34">
    <div
      class={cn("flex flex-col md:flex-row gap-20 md:gap-10", MAX_WIDTH_CLASS)}
    >
      <AnimatedCircle
        numLabel="01"
        title="Select Theme Preset"
        description="Choose the theme you want to customize from our growing library."
      />
      <AnimatedCircle
        numLabel="02"
        title="Customize Visually"
        description="Use our intuitive interface to adjust colors, dimensions, typography, and other properties."
      />
      <AnimatedCircle
        numLabel="03"
        title="Copy Code"
        description="Copy the generated Tailwind CSS code directly into your project."
      />
    </div>
  </div>
</div>

<div bind:this={roadmap} id="roadmap" class="roadmap-scroll-div">
  <div class="mt-60 px-10 flex flex-col items-center">
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
        bind:card={roadmapCard1}
        icon={Palette}
        title="Global Theme Editor"
        badgeLabel="Done"
        description="Create and manage complete themes with presets fr your entire application."
      />
      <IconCard
        bind:card={roadmapCard2}
        icon={ArrowRightLeft}
        title="Theme Import/Export"
        badgeLabel="Done"
        description="Save and share your custom themes with others."
      />
      <IconCard
        bind:card={roadmapCard3}
        icon={Layers}
        title="AI Theme Generation"
        badgeLabel="In Progress"
        description="Generate and customize themes with AI assistance, making theme creation faster and more intuitive."
      />

      <IconCard
        bind:card={roadmapCard4}
        icon={Users}
        title="Community Themes"
        badgeLabel="Coming Soon"
        description="Allow users to submit themes, vote on the best designs."
      />
      <IconCard
        bind:card={roadmapCard5}
        icon={Folder}
        title="Multi-Project Management"
        badgeLabel="Planned"
        description="Save and manage multiple theme projects, making it easy to switch between designs."
      />
      <IconCard
        bind:card={roadmapCard6}
        icon={Grid3X3}
        title="Smart Theme Generator"
        badgeLabel="Planned"
        description="Generate beautiful themes from a single color, color pair, or even an image. Expand your customization options with AI-powered theme generation."
      />
    </div>
  </div>
</div>

<FAQ bind:faq />

<ComponentsStandOut />

<!-- Snippets -->
{#snippet ProBadgeLabel()}
  <div class="flex items-center gap-2">
    <span>Pro</span>
    <Gem class="size-2.5" />
  </div>
{/snippet}

{#snippet VisThemEditorTitle()}
  <h1 class="text-5xl font-extrabold tracking-tight">
    Design Your <span class="italic font-light">Perfect</span>
    <Circle class="inline size-13" /> shadcn/ui Theme
  </h1>
{/snippet}

{#snippet ProFeaturesTitle()}
  <h1 class="text-5xl font-extrabold tracking-tight">
    Generate Themes With <span class="text-primary">AI</span>
    in Seconds
  </h1>
{/snippet}

<!-- Chat -->

{#snippet MeMessage(message: string)}
  <div class="flex flex-col gap-1 items-end ml-20">
    <span class="p-4 border bg-card rounded-md w-fit">{message}</span>
    <!-- Buttons -->
    <div
      class="flex items-center justify-end w-full opacity-0 hover:opacity-100 transition-all"
    >
      <Button size="icon" variant="ghost" class="rounded-sm">
        <RefreshCcw />
      </Button>
      <Button size="icon" variant="ghost" class="rounded-sm">
        <SquarePen />
      </Button>
      <Button size="icon" variant="ghost" class="rounded-sm"><Copy /></Button>
    </div>
  </div>
{/snippet}
{#snippet ThemMessage(message: string)}
  <div class="flex flex-col gap-1 items-start mr-20">
    <div class="flex items-start gap-2">
      <div class="border rounded-full p-2 bg-primary text-primary-foreground">
        <SlidersHorizontal class="size-4" />
      </div>

      <span class="rounded-md w-fit">{message}</span>
    </div>

    <!-- Buttons -->
    <div
      class="pl-8 flex items-center opacity-0 w-full hover:opacity-100 transition-all"
    >
      <Button size="icon" variant="ghost" class="rounded-sm">
        <RefreshCcw />
      </Button>
      <Button size="icon" variant="ghost" class="rounded-sm"><Copy /></Button>
    </div>
  </div>
{/snippet}

{#snippet MockChat()}
  <ScrollArea
    class="hidden lg:flex h-120 translate-y-20 grow min-w-120 xl:min-w-160 rounded-md border backdrop-blur-xs"
  >
    <div class="px-4 pt-4 pb-40 flex flex-col gap-4">
      <!-- TODO -->
      {@render MeMessage("Generate a theme from this image.")}

      {@render ThemMessage(
        "I've generated a Midnight Bloom theme based on your image. It features deep purples and blues for a calming, modern look."
      )}

      {@render MeMessage("Can you generate a theme inspired by @Twitter?")}

      {@render ThemMessage(
        "Alright, I've whipped up a Twitter-inspired theme. Expect bright blues and clean contrasts for a social, energetic vibe."
      )}

      {@render MeMessage("How about a @Supabase theme?")}

      {@render ThemMessage(
        "I've generated a Supabase theme for you. It uses fresh greens and dark backgrounds for a modern, developer-friendly feel."
      )}
    </div>
  </ScrollArea>
{/snippet}

{#snippet ColorPaletteThing()}
  <div
    class={cn(
      "hidden lg:flex lg:flex-col min-w-130 xl:min-w-150 border border-border rounded-xl text-sm text-card-foreground from-background to-background/95 relative bg-linear-to-b  shadow-xl tracking-wider translate-y-20"
    )}
  >
    <div class="flex gap-2 p-4">
      <div class="size-3 rounded-full bg-red-500"></div>
      <div class="size-3 rounded-full bg-yellow-500"></div>
      <div class="size-3 rounded-full bg-green-500"></div>
    </div>

    <div class="w-full h-px bg-border"></div>

    <div class="flex flex-col gap-4 px-6 py-7">
      <div class="flex justify-between">
        <span>Color Palette</span>
        <Palette class="size-4 text-muted-foreground" />
      </div>

      <div class="flex flex-col gap-1.5">
        <div
          class="from-primary via-accent to-background h-24 w-full rounded-xl bg-linear-to-r"
        ></div>
        <div
          class="flex justify-between text-xs text-muted-foreground font-light px-4"
        >
          <span>Primary</span>
          <span>Accent</span>
          <span>Background</span>
        </div>
      </div>

      <div class="flex justify-between mt-2">
        <span>Preview</span>
        <Eye class="size-4 text-muted-foreground" />
      </div>

      <div class="flex gap-2 w-full">
        <Button
          class="flex-1 rounded-sm flex items-center justify-center gap-2"
        >
          <Copy />
          Copy Code
        </Button>

        <Button
          class="flex-1 rounded-sm flex items-center justify-center gap-2"
          variant="outline"
        >
          <Circle />
          oklch, hsl, rgb, hex
        </Button>
      </div>

      <div
        class="rounded-md border border-border bg-card text-card-foreground shadow w-full flex items-center gap-2 p-4"
      >
        <div
          class="size-8 text-center rounded-full relative bg-accent border border-border"
        >
          <span
            class={cn(ABSOLUTE_CENTER_CLASS, "text-xs text-accent-foreground")}
          >
            UI
          </span>
        </div>
        <div class="flex flex-col">
          <div class="bg-foreground/90 mb-2 h-2 w-24 rounded"></div>
          <div class="bg-muted-foreground/60 h-2 w-16 rounded"></div>
        </div>
      </div>
    </div>
  </div>
{/snippet}
