<script lang="ts">
  import SectionHeading from "./section-heading.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { cn } from "$lib/utils";
  import { MAX_WIDTH_CLASS } from "$lib/consts";

  let { faq = $bindable() }: { faq: HTMLDivElement } = $props();
</script>

<div
  bind:this={faq}
  id="faq"
  class="mt-64 mb-30 px-26 flex flex-col items-center faq-scroll-div"
>
  <SectionHeading
    label="FAQ"
    title="Frequently Asked Questions"
    subtitle="Find answers to common questions about tweakcn_clone."
  />

  <div class="flex justify-center w-full">
    <div class={cn("flex flex-col items-center mt-12 w-full", MAX_WIDTH_CLASS)}>
      <Accordion.Root type="single" class="w-full flex flex-col gap-5">
        {@render FaqItem(
          "What is tweakcn_clone?",
          "tweakcn_clone is a site I (Marcus Adair) built that recreates an awesome website I use for app themes. It features some great animations and design so I recreated it for fun and to learn!"
        )}
        {@render FaqItem(
          "Is tweakcn free to use?",
          "Yes, tweakcn is completely free to use. We may introduce premium features in the future, but the core functionality will always remain free."
        )}
        {@render FaqItem(
          "What is tweakcn Pro and what does it include?",
          "tweakcn Pro is a premium subscription service available for $8 per month. It unlocks all of tweakcn's advanced features, including powerful AI theme generation. You can cancel your subscription at any time and still benefit from the core functionality."
        )}
        {@render FaqItem(
          "How do I customize a shadcn/ui theme?",
          "If you want to customize themes go check out the real tweakcn website at tweakcn.com"
        )}
        {@render FaqItem(
          "Does tweakcn support Tailwind CSS v4?",
          "Yes, tweakcn supports Tailwind CSS v4 (and v3). You can choose the version of Tailwind CSS you want to use from the dropdown menu in the Code section. It also supports multiple color formats to best suit your project."
        )}
        {@render FaqItem(
          "Do I need to know Tailwind CSS to use tweakcn?",
          "No, you don't need to know Tailwind CSS to use tweakcn. Our visual editor makes it easy to customize components without writing any code. However, having some knowledge of Tailwind CSS will help you understand the generated code better."
        )}
        {@render FaqItem(
          "Can I use tweakcn with my existing shadcn/ui project?",
          "Yes, tweakcn is designed to work with existing shadcn/ui projects. You can export the generated code by either copying it or running the command to apply the theme to your project automatically."
        )}
        {@render FaqItem(
          "Is tweakcn_clone open source?",
          "Yes it is! Go check out the code on GitHub."
        )}
      </Accordion.Root>
    </div>
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
