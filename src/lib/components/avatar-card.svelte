<script lang="ts">
  import gsap from "gsap";

  interface Props {
    name: string;
    handle: string;
    tweet: string;
    pauseLoop?: () => void;
    resumeLoop?: () => void;
  }
  let { name, handle, tweet, pauseLoop, resumeLoop }: Props = $props();

  let card: HTMLDivElement;
  function animate(animIn: boolean) {
    const toBoxShadow = animIn
      ? "0px 12px 12px rgba(0,0,0,0.06)"
      : "0px 0px 0px rgba(0,0,0,0)";

    const DURATION = 0.25;
    gsap.to(card, {
      boxShadow: toBoxShadow,
      duration: DURATION,
      ease: "power2.out",
    });
  }
</script>

<div
  bind:this={card}
  class="animated-card bg-card border rounded-xl py-4 shadow-sm px-6 border-b-2 flex flex-col w-90 h-48 mr-4"
  onmouseenter={() => {
    animate(true);
    pauseLoop?.();
  }}
  onmouseleave={() => {
    animate(false);
    resumeLoop?.();
  }}
  role="gridcell"
  tabindex={0}
>
  <div class="flex items-center gap-4">
    <!-- <div class="h-10.5 w-10.5 bg-primary rounded-full"></div> -->
    <img
      class="h-10.5 w-10.5 rounded-full"
      src={`https://robohash.org/${handle}.png?set=set1&bgset=bg1`}
      alt="avatar"
    />
    <div class="flex flex-col">
      <span class="text-lg font-medium tracking-wider">{name}</span>
      <span class="text-muted-foreground -translate-y-1 text-sm">@{handle}</span
      >
    </div>
  </div>

  <p class="font-light text-muted-foreground tracking-wider text-sm mb-6 mt-8">
    {tweet}
  </p>
</div>
