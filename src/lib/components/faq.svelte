<script lang="ts">
  import SectionHeading from "./section-heading.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<div id="faq" class="mt-64 mb-30 px-0 flex flex-col items-center">
  <SectionHeading
    label="FAQ"
    title="Frequently Asked Questions"
    subtitle="Find answers to common questions about tweakcn_clone."
  />

  <div class="flex flex-col items-center mt-12 w-full">
    <Accordion.Root
      type="single"
      class="w-full sm:max-w-[70%] flex flex-col gap-5"
    >
      {@render FaqItem("What is tweakcn_clone?", "")}
      {@render FaqItem("Is tweakcn free to use?", "")}
      {@render FaqItem("What is tweakcn Pro and what does it include?", "")}
      {@render FaqItem("How do I customize a shadcn/ui theme?", "")}
      {@render FaqItem("Does tweakcn support Tailwind CSS v4?", "")}
      {@render FaqItem("Do I need to know Tailwind CSS to use tweakcn?", "")}
      {@render FaqItem(
        "Can I use tweakcn with my existing shadcn/ui project?",
        ""
      )}
      {@render FaqItem("Is tweakcn open source?", "")}
    </Accordion.Root>
  </div>
</div>

{#snippet FaqItem(title: string, content: string)}
  <Accordion.Item>
    <Accordion.Trigger>{title}</Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance">
      <p>{content}</p>
    </Accordion.Content>
  </Accordion.Item>
{/snippet}
