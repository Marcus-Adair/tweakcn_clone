<script lang="ts">
  import { MAX_WIDTH_CLASS } from "$lib/consts";
  import { cn } from "$lib/utils";
  import SiteLogo from "./site-logo.svelte";
  import gsap from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { onMount } from "svelte";

  function scrollToDiv(className: string, offsetY = 0) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `.${className}`,
        offsetY,
      },
      ease: "power2.inOut",
    });
  }

  const resourceLinks = [
    { name: "Features", scrollDiv: "features-scroll-div", offsetY: -165 },
    { name: "Examples", scrollDiv: "examples-scroll-div", offsetY: 0 },
    { name: "Roadmap", scrollDiv: "roadmap-scroll-div", offsetY: -150 },
  ];

  const productLinks = [
    { name: "GitHub", href: "https://github.com/Marcus-Adair" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/marcus-adair/" },
    { name: "Contact", href: "mailto:marcus.a.adair@gmail.com" },
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });
</script>

<footer class="flex justify-center">
  <div
    class={cn(
      "py-3 px-8 flex flex-col gap-2 text-sm mt-12 w-full",
      MAX_WIDTH_CLASS
    )}
  >
    <div class="flex gap-36">
      <div class="flex flex-col gap-4 max-w-112.5">
        <SiteLogo />
        <span class="text-muted-foreground font-light">
          A clone of the font-end landing site for tweakcn.com, a powerful
          visual theme editor for shadcn/ui components with Tailwind CSS
          support. Make components stand out.
        </span>
      </div>

      <nav class="flex flex-col gap-4">
        <span class="font-bold">Resources</span>
        <ul class="text-muted-foreground font-light flex flex-col gap-2 w-fit">
          {#each resourceLinks as link}
            <li>
              {@render ScrollLink(link.name, link.scrollDiv, link.offsetY)}
            </li>
          {/each}
        </ul>
      </nav>

      <nav class="flex flex-col gap-4">
        <span class="font-bold">Product</span>
        <ul class="text-muted-foreground font-light flex flex-col gap-2 w-fit">
          {#each productLinks as link}
            <li>
              {@render ExternalLink(link.name, link.href)}
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <!-- Separator -->
    <div class="w-full bg-border h-px mt-6"></div>

    <div
      class="flex justify-between text-xs font-light mt-7 mb-16 text-muted-foreground"
    >
      <span>2025 tweakcn_clone - fun side project</span>
      <span>No Privacy Policy</span>
    </div>
  </div>
</footer>

{#snippet ScrollLink(name: string, scrollDiv: string, offsetY: number)}
  {@const className = name.toLowerCase()}

  <button
    class="hover:text-foreground hover:font-normal transition-all cursor-pointer text-left"
    onclick={() => scrollToDiv(scrollDiv, offsetY)}
  >
    {name}
  </button>
{/snippet}

{#snippet ExternalLink(name: string, href: string)}
  {@const className = name.toLowerCase()}

  <a
    class="hover:text-foreground hover:font-normal transition-all w-fit"
    {href}
    target="_blank"
  >
    {name}
  </a>
{/snippet}
