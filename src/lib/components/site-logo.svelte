<script lang="ts">
  import { SlidersHorizontal } from "lucide-svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });
</script>

<button
  class="flex gap-2 items-center cursor-pointer"
  onclick={() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "examples-scroll-div",
      ease: "power2.inOut",
    });
  }}
>
  <SlidersHorizontal class="size-5" />
  <span class="font-bold text-sm">tweakcn_clone</span>
</button>
