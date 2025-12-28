<script lang="ts">
  import { MAX_WIDTH_CLASS } from "$lib/consts";
  import { cn } from "$lib/utils";
  import SiteLogo from "./site-logo.svelte";
  import gsap from "gsap";

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
        <!-- TODO: put logos -->
      </div>

      <nav class="flex flex-col gap-4">
        <span class="font-bold">Resources</span>
        <ul class="text-muted-foreground font-light flex flex-col gap-2 w-fit">
          <li>
            <a
              class="hover:text-foreground transition-colors"
              href="#features"
              onmouseenter={() =>
                animateUnderlineEnter("features-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("features-footer-underline")}
            >
              Features
            </a>
            {@render Underline("features-footer-underline")}
          </li>
          <li>
            <a
              class="hover:text-foreground transition-colors"
              href="#examples"
              onmouseenter={() =>
                animateUnderlineEnter("examples-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("examples-footer-underline")}
            >
              Examples
            </a>
            {@render Underline("examples-footer-underline")}
          </li>
          <li>
            <a
              class="hover:text-foreground transition-colors"
              href="#roadmap"
              onmouseenter={() =>
                animateUnderlineEnter("roadmap-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("roadmap-footer-underline")}
            >
              Roadmap
            </a>
            {@render Underline("roadmap-footer-underline")}
          </li>
        </ul>
      </nav>
      <nav class="flex flex-col gap-4">
        <span class="font-bold">Product</span>
        <ul class="text-muted-foreground font-light flex flex-col gap-2 w-fit">
          <li class="">
            <a
              class="hover:text-foreground transition-colors"
              href="https://github.com/Marcus-Adair"
              onmouseenter={() =>
                animateUnderlineEnter("github-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("github-footer-underline")}
            >
              GitHub
            </a>
            {@render Underline("github-footer-underline")}
          </li>
          <li>
            <a
              class="hover:text-foreground transition-colors"
              href="https://www.linkedin.com/in/marcus-adair/"
              onmouseenter={() =>
                animateUnderlineEnter("linkedin-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("linkedin-footer-underline")}
            >
              LinkedIn
            </a>
            {@render Underline("linkedin-footer-underline")}
          </li>
          <li>
            <a
              class="hover:text-foreground transition-colors"
              href="mailto:marcus.a.adair@gmail.com"
              onmouseenter={() =>
                animateUnderlineEnter("contact-footer-underline")}
              onmouseleave={() =>
                animateUnderlineLeave("contact-footer-underline")}
            >
              Contact
            </a>
            {@render Underline("contact-footer-underline")}
          </li>
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

{#snippet Underline(anchorClass: string)}
  <div class={`${anchorClass} w-fit h-[1.5px] bg-primary opacity-0`}></div>
{/snippet}
