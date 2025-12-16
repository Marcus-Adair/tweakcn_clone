<script>
  import FAQ from "$lib/components/faq.svelte";
  import RoadmapCard from "$lib/components/roadmap-card.svelte";
  import SectionBadge from "$lib/components/section-badge.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { Button } from "$lib/components/ui/button";
  import {
    ArrowRight,
    ArrowRightLeft,
    Check,
    Circle,
    Folder,
    Grid3X3,
    Layers,
    Palette,
    Users,
  } from "lucide-svelte";
</script>

<div id="examples" class="px-32">
  <!-- Visual Theme Editor -->
  <div class="mt-34 px-10 flex flex-col gap-4">
    <SectionBadge label="Visual Theme Editor" />

    <h1 class="text-5xl font-extrabold tracking-tight">
      Design Your <span class="italic font-light">Perfect</span>
      <Circle class="inline size-13" /> shadcn/ui Theme
    </h1>

    <span class="text-lg font-light text-muted-foreground tracking-tight mt-1">
      Customize colors, typography, and layouts with a real-time preview. No
      signup required.
    </span>

    <div class="flex gap-4 mt-5">
      <Button size="xl" class="hover:-translate-y-1 ease-in-out duration-200">
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

  <!-- Theme presets -->
  <div class="mt-64 px-10 flex flex-col items-center">
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
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Testimonials"
      title="Loved by developers worldwide"
      subtitle="See what the community is saying about tweakcn"
    />
  </div>
</div>

<div id="features">
  <!-- Features -->
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Features"
      title="Powerful Customization Tools"
      subtitle="All the tools you need to customize your shadcn/ui components and make them unique."
    />
  </div>

  <!-- How it works -->
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="How It Works"
      title="Simple Process, Beautiful Results"
      subtitle="Customize your shadcn/ui components in just a few simple steps."
    />
  </div>
</div>

<div id="roadmap">
  <div class="mt-64 px-10 flex flex-col items-center">
    <SectionHeading
      label="Roadmap"
      title="What's Coming Next"
      subtitle="We're constantly working to improve tweakcn and add new features. Here's what's on our roadmap."
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-26 mt-17">
    <RoadmapCard
      icon={Palette}
      title="Global Theme Editor"
      badgeLabel="Done"
      description="Create and manage complete themes with presets fr your entire application."
    />
    <RoadmapCard
      icon={ArrowRightLeft}
      title="Theme Import/Export"
      badgeLabel="Done"
      description="Save and share your custom themes with others."
    />
    <RoadmapCard
      icon={Layers}
      title="AI Theme Generation"
      badgeLabel="In Progress"
      description="Generate and customize themes with AI assistance, making theme creation faster and more intuitive."
    />

    <RoadmapCard
      icon={Users}
      title="Community Themes"
      badgeLabel="Coming Soon"
      description="Allow users to submit themes, vote on the best designs."
    />
    <RoadmapCard
      icon={Folder}
      title="Multi-Project Management"
      badgeLabel="Planned"
      description="Save and manage multiple theme projects, making it easy to switch between designs."
    />
    <RoadmapCard
      icon={Grid3X3}
      title="Smart Theme Generator"
      badgeLabel="Planned"
      description="Generate beautiful themes from a single color, color pair, or even an image. Expand your customization options with AI-powered theme generation."
    />
  </div>
</div>

<FAQ />

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
