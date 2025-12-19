<script lang="ts">
  import SectionBadge from "./section-badge.svelte";

  interface Props {
    label: string;
    title: string;
    subtitle: string;
  }
  let { label, title, subtitle }: Props = $props();
</script>

<div class="flex flex-col items-center gap-6 z-20">
  <SectionBadge {label} />
  <h2 class="text-4xl font-bold tracking-tight text-center">
    {title}
  </h2>
  <span
    class="text-xl tracking-wide font-light text-muted-foreground text-center"
  >
    {subtitle}
  </span>
</div>
