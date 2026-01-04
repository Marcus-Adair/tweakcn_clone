<script lang="ts">
  import { SlidersHorizontal } from "lucide-svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { cn } from "$lib/utils";

  interface Props {
    header?: boolean;
  }
  let { header }: Props = $props();

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
  <span class={cn("font-bold text-sm", header && "hidden lg:flex")}
    >tweakcn_clone</span
  >
</button>
