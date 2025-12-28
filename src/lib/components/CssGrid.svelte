<script lang="ts">
  import { cn } from "$lib/utils";

  let { alt = false, divClass }: { alt?: boolean; divClass?: string } =
    $props();
</script>

{#if !alt}
  <div
    class={cn(
      "z-0 absolute inset-0 bg-transparent bg-[linear-gradient(to_right,var(--muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted)_1px,transparent_1px)] bg-size-[4rem_4rem]",
      divClass
    )}
  ></div>
{:else}
  <div
    class={cn(
      "z-0 absolute inset-0 bg-primary bg-[linear-gradient(to_right,rgba(from_var(--primary-foreground)_r_g_b/0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--primary-foreground)_r_g_b/0.075)_1px,transparent_1px)] bg-size-[4rem_4rem]",
      divClass
    )}
  ></div>
{/if}
