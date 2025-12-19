<script lang="ts">
  import { theme } from "../stores";
  import { setTheme } from "./theme-watcher.svelte";

  function toggleTheme() {
    console.log("Theme is: ", $theme);
    if ($theme === "default") {
      setTheme("bold-tech");
    } else {
      setTheme("default");
    }
  }
</script>

<button onclick={toggleTheme}> TOG </button>
