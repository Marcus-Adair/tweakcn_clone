<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { ModeWatcher } from "mode-watcher";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import ThemeWatcher from "$lib/components/theme-watcher.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>tweakcn_clone</title>
</svelte:head>

<ModeWatcher defaultMode={"dark"} />
<ThemeWatcher />

<div class="flex flex-col gap-2">
  <Header />

  <main class="flex flex-col">
    {@render children()}
  </main>

  <Footer />
</div>
