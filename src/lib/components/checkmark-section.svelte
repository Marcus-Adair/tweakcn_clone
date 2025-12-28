<script lang="ts">
  import { ArrowRight, Check } from "lucide-svelte";
  import SectionBadge from "./section-badge.svelte";
  import type { Snippet } from "svelte";
  import { Button } from "./ui/button";

  interface Props {
    divElt: HTMLDivElement;
    badgeLabel: string;
    title: Snippet;
    subtitle: string;
    btn1Label: string;
    btn2Label: string;
    check1Str: string;
    check2Str: string;
    check3Str: string;
    // TODO: add Snippet for desktop view component
  }
  let {
    badgeLabel,
    divElt = $bindable(),
    title,
    subtitle,
    btn1Label,
    btn2Label,
    check1Str,
    check2Str,
    check3Str,
  }: Props = $props();
</script>

<div class="flex justify-center">
  <div bind:this={divElt} class="mt-34 px-10 flex flex-col gap-4 z-10">
    <SectionBadge label={badgeLabel} />

    {@render title()}

    <span class="text-lg font-light text-muted-foreground tracking-tight mt-1">
      {subtitle}
    </span>

    <div class="flex gap-4 mt-5">
      <Button
        size="xl"
        class="hover:-translate-y-1 ease-in-out duration-200"
        href="https://tweakcn.com/editor/theme"
        target="_blank"
      >
        {btn1Label}
        <ArrowRight class="size-4.5 ml-2" />
      </Button>
      <Button
        size="xl"
        variant="outline"
        class="hover:-translate-y-1 ease-in-out duration-200"
      >
        {btn2Label}
      </Button>
    </div>

    <div class="flex gap-5.5 text-sm text-muted-foreground mt-4">
      <div class="flex gap-1.5 items-center">
        <Check class="text-primary size-5" />
        {check1Str}
      </div>
      <div class="flex gap-1.5 items-center">
        <Check class="text-primary size-5" />
        {check2Str}
      </div>
      <div class="flex gap-1.5 items-center">
        <Check class="text-primary size-5" />
        {check3Str}
      </div>
    </div>
  </div>
</div>
