<script lang="ts">
  import { Sparkle } from "lucide-svelte";
  import { Badge } from "./ui/badge";

  interface Props {
    label: string;
  }
  let { label }: Props = $props();
</script>

<Badge variant="secondary" class="px-5 py-1.5 shadow-md">
  <Sparkle class="fill-primary stroke-none inline size-3" />
  {label}
</Badge>
