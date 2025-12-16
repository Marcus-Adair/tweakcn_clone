<script>
  import SiteLogo from "./site-logo.svelte";
</script>

<footer class="py-3 px-26 flex flex-col gap-2 text-sm mt-12">
  <div class="flex gap-36">
    <div class="flex flex-col gap-4 max-w-112.5">
      <SiteLogo />
      <span class="text-muted-foreground font-light">
        A powerful visual theme editor for shadcn/ui components with Tailwind
        CSS support. Make your components stand out.
      </span>
      <!-- TODO: put logos -->
    </div>

    <nav class="flex flex-col gap-4">
      <span class="font-bold">Resources</span>
      <ul class="text-muted-foreground font-light flex flex-col gap-2">
        <li>
          <a class="hover:text-foreground transition-colors" href="#features"
            >Features</a
          >
        </li>
        <li>
          <a class="hover:text-foreground transition-colors" href="#examples"
            >Examples</a
          >
        </li>
        <li>
          <a class="hover:text-foreground transition-colors" href="#roadmap"
            >Roadmap</a
          >
        </li>
      </ul>
    </nav>
    <nav class="flex flex-col gap-4">
      <span class="font-bold">Product</span>
      <ul class="text-muted-foreground font-light flex flex-col gap-2">
        <li>
          <a
            class="hover:text-foreground transition-colors"
            href="https://github.com/Marcus-Adair">GitHub</a
          >
        </li>
        <li>
          <a
            class="hover:text-foreground transition-colors"
            href="https://www.linkedin.com/in/marcus-adair/">LinkedIn</a
          >
        </li>
        <li>
          <a
            class="hover:text-foreground transition-colors"
            href="mailto:marcus.a.adair@gmail.com">Contact</a
          >
        </li>
      </ul>
    </nav>
  </div>

  <!-- Separator -->
  <div class="w-full bg-border h-px mt-6"></div>

  <div
    class="flex justify-between text-xs font-light mt-7 mb-16 text-muted-foreground"
  >
    <span>© 2025 tweakcn_clone. All rights reserved.</span>
    <span>Privacy Policy</span>
  </div>
</footer>
