<script lang="ts">
  import { type Icon } from "lucide-svelte";
  import { Badge } from "./ui/badge";
  import gsap from "gsap";
  import { type Snippet } from "svelte";

  interface Props {
    icon: typeof Icon;
    title: string;
    description: string;
    badgeLabel?: string | Snippet;
    card?: HTMLDivElement;
  }
  let {
    icon,
    title,
    description,
    badgeLabel,
    card = $bindable(),
  }: Props = $props();

  function animate(animIn: boolean) {
    if (!card) return;
    const toValue = animIn ? -10 : 0;
    const scaleValue = animIn ? 1.01 : 1;

    const toBoxShadow = animIn
      ? "0px 12px 30px rgba(0,0,0,0.05)"
      : "0px 0px 0px rgba(0,0,0,0)";

    const DURATION = 0.25;
    gsap.to(card, {
      y: toValue,
      duration: DURATION,
      ease: "power1.inOut",
    });
    gsap.to(card, {
      scale: scaleValue,
      duration: DURATION,
      ease: "power1.inOut",
    });
    gsap.to(card, {
      boxShadow: toBoxShadow,
      duration: DURATION,
      ease: "power2.out",
    });
  }
</script>

<div
  bind:this={card}
  class="animated-card bg-card border rounded-md py-4 shadow-sm px-6 border-b-4 flex flex-col gap-2.5"
  onmouseenter={() => animate(true)}
  onmouseleave={() => animate(false)}
  role="gridcell"
  tabindex={0}
>
  {#if icon}
    {@const Icon = icon}
    <div class="bg-accent w-fit h-fit p-4 rounded-full">
      <Icon class="size-5 text-accent-foreground" />
    </div>
  {/if}

  <div class="flex justify-between gap-7">
    <p class="text-xl font-bold tracking-wider">{title}</p>
    {#if badgeLabel}
      <Badge
        class="rounded-sm border-b-3 px-3.5 tracking-wider h-6.5"
        variant="outline"
      >
        {#if typeof badgeLabel === "string"}
          {badgeLabel}
        {:else}
          {@render badgeLabel()}
        {/if}
      </Badge>
    {/if}
  </div>

  <p class="font-light text-muted-foreground tracking-wider mb-8">
    {description}
  </p>
</div>
