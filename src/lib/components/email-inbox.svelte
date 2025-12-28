<script lang="ts">
  import { ABSOLUTE_CENTER_CLASS } from "$lib/consts";
  import { cn } from "$lib/utils";
  import {
    Archive,
    ArchiveX,
    Clock,
    EllipsisVertical,
    Forward,
    Info,
    MessagesSquare,
    Reply,
    ReplyAll,
    Search,
    ShoppingCart,
    Users,
    Icon,
    Cloud,
    Cone,
    Mail,
  } from "lucide-svelte";
  import { File, Inbox, Send, Trash2 } from "lucide-svelte";
  import * as Select from "./ui/select";
  import { Button } from "./ui/button";
  import ScrollArea from "./ui/scroll-area/scroll-area.svelte";
  import { generateMockEmails } from "$lib/mock-data";
  import { Card } from "./ui/card";

  const emails = generateMockEmails(10);
  let curEmail = $state(emails[0]);

  type SelectValue = "1" | "2" | "3";
  const selectKeyValues: Record<SelectValue, string> = {
    1: "alicia@example.com",
    2: "alicia2@example.com",
    3: "alicia3@example.com",
  };
  const selectIcons: Record<SelectValue, typeof Icon> = {
    1: Cloud,
    2: Cone,
    3: Mail,
  };
  let selectedNum = $state<SelectValue>("1");
  let CurrentIcon = $derived<typeof Icon>(
    selectIcons[selectedNum as SelectValue]
  );
</script>

<div
  class={cn(
    "flex border border-border rounded-md w-full overflow-hidden max-h-150 mt-8 shadow-lg"
  )}
>
  <!-- Sidebar -->
  <div class="h-full min-w-60 border-r border-border text-xs">
    <div class="px-2 h-13 py-2 flex items-center">
      <Select.Root type="single" name="mock-select" bind:value={selectedNum}>
        <Select.Trigger class="w-full">
          <CurrentIcon /> Alicia Koch
        </Select.Trigger>

        <Select.Content>
          <Select.Group>
            {#each Object.entries(selectKeyValues) as [value, label]}
              {@const Icon = selectIcons[value as SelectValue]}
              <Select.Item {value}>
                <Icon />
                {label}
              </Select.Item>
            {/each}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>

    <div class="w-full h-px bg-border mb-2"></div>

    <div class="flex flex-col gap-0.5">
      {@render SidebarTab(Inbox, "Inbox", 128, true)}
      {@render SidebarTab(File, "Drafts", 9)}
      {@render SidebarTab(Send, "Sent")}
      {@render SidebarTab(Trash2, "Junk")}
      {@render SidebarTab(Archive, "Archive")}

      <div class="w-full h-px bg-border"></div>

      {@render SidebarTab(Users, "Social", 972)}
      {@render SidebarTab(Info, "Updates", 342)}
      {@render SidebarTab(MessagesSquare, "Forums", 128)}
      {@render SidebarTab(ShoppingCart, "Shopping", 8)}
      {@render SidebarTab(Archive, "Promotions", 21)}
    </div>
  </div>

  <!-- Inbox -->
  <div class="h-full max-w-100 border-r border-border">
    <div class="px-4 h-13 py-2 flex items-center justify-between">
      <span class="font-bold text-lg">Inbox</span>

      <!-- TODO: put tabs -->
    </div>
    <div class="w-full h-px bg-border mb-2"></div>

    <div class="px-4 pt-2 pb-4">
      <div class="relative">
        <input
          placeholder="Search"
          class="border w-full pl-8.5 pr-3 py-2 rounded-md"
        />
        <Search
          class={cn(
            "text-muted-foreground size-4 absolute top-1/2 left-2 -translate-y-1/2"
          )}
        />
      </div>
    </div>

    <ScrollArea class="px-4 h-full overflow-hidden">
      {#each emails as email}
        <button
          onclick={() => {
            curEmail = email;
          }}
        >
          <Card
            class="flex flex-col gap-2 pt-3 px-4 text-xs mb-2 hover:bg-accent hover:text-accent-foreground transform-colors cursor-pointer"
          >
            <div class="flex justify-between">
              <span class="text-sm font-semibold">{email.userName}</span>
              <span class="text-muted-foreground">about 2 years ag</span>
            </div>

            <span class="text-left">Re: {email.subject}</span>

            <span class="line-clamp-2 text-left">{email.message}</span>
          </Card>
        </button>
      {/each}
    </ScrollArea>
  </div>

  <!-- Email window  -->
  <div class="w-full">
    <div class="px-4 h-13 py-2 flex items-center justify-between">
      <div class="flex gap-2 items-center">
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md"
          title="Archive"
        >
          <Archive />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md"
          title="Move to junk"
        >
          <ArchiveX />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md text-destructive hover:text-destructive"
          title="Delete"
        >
          <Trash2 />
        </Button>
        <div class="h-6 w-px bg-border"></div>
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md"
          title="Snooze"
        >
          <Clock />
        </Button>
      </div>

      <div class="flex gap-2 items-center">
        <Button size="icon-sm" variant="ghost" class="rounded-md" title="Reply">
          <Reply />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md"
          title="Reply all"
        >
          <ReplyAll />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          class="rounded-md"
          title="Forward"
        >
          <Forward />
        </Button>
        <div class="h-6 w-px bg-border"></div>
        <Button size="icon-sm" variant="ghost" class="rounded-md">
          <EllipsisVertical />
        </Button>
      </div>
    </div>
    <div class="w-full h-px bg-border mb-2"></div>

    <div class="flex justify-between px-4 pt-2 pb-4 text-xs">
      <div class="flex gap-4">
        <div
          class="w-10 h-10 rounded-full border border-border relative bg-primary translate-y-0.5"
        >
          <span class={cn(ABSOLUTE_CENTER_CLASS, "text-primary-foreground")}>
            UI
          </span>
        </div>
        <div class="flex flex-col gap-0.5">
          <span class="mb-0.5 font-semibold text-sm">{curEmail.userName}</span>
          <span
            ><span class="text-muted-foreground">Re:</span>
            {curEmail.subject}</span
          >
          <span>
            <span class="text-muted-foreground">Reply-To:</span>
            {curEmail.replyTo}
          </span>
        </div>
      </div>
      <span>{new Date(curEmail.date).toLocaleDateString()}</span>
    </div>
    <div class="w-full h-px bg-border mb-2"></div>

    <span class="px-5 py-1 text-sm block">{curEmail.message}</span>
  </div>
</div>

{#snippet SidebarTab(
  icon: typeof Icon,
  name: string,
  num?: number,
  active?: boolean
)}
  {@const Icon = icon}
  <div
    class={cn(
      "flex justify-between items-center px-2.5 py-3 rounded-md mx-2 cursor-pointer",
      { "bg-primary text-primary-foreground hover:bg-primary/90": active },
      { "hover:bg-accent hover:text-accent-foreground": !active }
    )}
  >
    <div class="flex items-center gap-4">
      <Icon class="size-4" />
      <span>{name}</span>
    </div>
    <span>{num ?? ""}</span>
  </div>
{/snippet}
