<script lang="ts">
  import SectionBadge from "./section-badge.svelte";

  interface Props {
    label: string;
    title: string;
    subtitle: string;
  }
  let { label, title, subtitle }: Props = $props();
</script>

<div class="flex flex-col items-center gap-3">
  <SectionBadge {label} />
  <h2 class="text-3xl font-bold tracking-tight text-center">
    {title}
  </h2>
  <span
    class="text-lg font-light text-muted-foreground tracking-tight mt-1 text-center"
  >
    {subtitle}
  </span>
</div>
