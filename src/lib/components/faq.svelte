<script lang="ts">
  import SectionHeading from "./section-heading.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { cn } from "$lib/utils";
  import { MAX_WIDTH_CLASS } from "$lib/consts";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let { faq = $bindable() }: { faq: HTMLDivElement } = $props();

  let faqItem1: HTMLDivElement;
  let faqItem2: HTMLDivElement;
  let faqItem3: HTMLDivElement;
  let faqItem4: HTMLDivElement;
  let faqItem5: HTMLDivElement;
  let faqItem6: HTMLDivElement;
  let faqItem7: HTMLDivElement;
  let faqItem8: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const FAQ_SCROLL_TRIGGER = { start: "top+=600px bottom" };
    const FAQ_ANIMATION = {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    };

    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: faq,
        ...FAQ_SCROLL_TRIGGER,
      },
    });

    const faqItems = [
      faqItem1,
      faqItem2,
      faqItem3,
      faqItem4,
      faqItem5,
      faqItem6,
      faqItem7,
      faqItem8,
    ];
    faqItems.forEach((item, index) => {
      faqTl.from(item, FAQ_ANIMATION, index * 0.12);
    });
  });
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
        <div bind:this={faqItem1}>
          {@render FaqItem(
            "What is tweakcn_clone?",
            "tweakcn_clone is a site I (Marcus Adair) built that recreates an awesome website I use for app themes. It features some great animations and design so I recreated it for fun and to learn!"
          )}
        </div>
        <div bind:this={faqItem2}>
          {@render FaqItem(
            "Is tweakcn free to use?",
            "Yes, tweakcn is completely free to use. We may introduce premium features in the future, but the core functionality will always remain free."
          )}
        </div>
        <div bind:this={faqItem3}>
          {@render FaqItem(
            "What is tweakcn Pro and what does it include?",
            "tweakcn Pro is a premium subscription service available for $8 per month. It unlocks all of tweakcn's advanced features, including powerful AI theme generation. You can cancel your subscription at any time and still benefit from the core functionality."
          )}
        </div>
        <div bind:this={faqItem4}>
          {@render FaqItem(
            "How do I customize a shadcn/ui theme?",
            "If you want to customize themes go check out the real tweakcn website at tweakcn.com"
          )}
        </div>
        <div bind:this={faqItem5}>
          {@render FaqItem(
            "Does tweakcn support Tailwind CSS v4?",
            "Yes, tweakcn supports Tailwind CSS v4 (and v3). You can choose the version of Tailwind CSS you want to use from the dropdown menu in the Code section. It also supports multiple color formats to best suit your project."
          )}
        </div>
        <div bind:this={faqItem6}>
          {@render FaqItem(
            "Do I need to know Tailwind CSS to use tweakcn?",
            "No, you don't need to know Tailwind CSS to use tweakcn. Our visual editor makes it easy to customize components without writing any code. However, having some knowledge of Tailwind CSS will help you understand the generated code better."
          )}
        </div>
        <div bind:this={faqItem7}>
          {@render FaqItem(
            "Can I use tweakcn with my existing shadcn/ui project?",
            "Yes, tweakcn is designed to work with existing shadcn/ui projects. You can export the generated code by either copying it or running the command to apply the theme to your project automatically."
          )}
        </div>
        <div bind:this={faqItem8}>
          {@render FaqItem(
            "Is tweakcn_clone open source?",
            "Yes it is! Go check out the code on GitHub."
          )}
        </div>
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
