<script lang="ts" module>
  import type { Theme } from "$lib/types";
  export function setTheme(value: Theme) {
    theme.set(value);
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores";
  import { THEMES } from "$lib/consts";

  onMount(() => {
    const unsubscribe = theme.subscribe((t) => {
      const el = document.documentElement;

      el.classList.remove(...THEMES);
      el.classList.add(t);
    });

    return unsubscribe;
  });
</script>
