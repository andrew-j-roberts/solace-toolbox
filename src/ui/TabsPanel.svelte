<script>
  import { selectedPage, openPages } from "../stores";
  import { navigate, close } from "../routes";
  import SvgClose from "./icons/SvgClose.svelte";
  import SvgHome from "./icons/SvgHome.svelte";
  import SvgImport from "./icons/SvgImport.svelte";
  import SvgExport from "./icons/SvgExport.svelte";
  import SvgQueue from "./icons/SvgQueue.svelte";
  import SvgSimulator from "./icons/SvgSimulator.svelte";
  import SvgConfig from "./icons/SvgConfig.svelte";
  import SvgTable from "./icons/SvgTable.svelte";
</script>

<div class="flex h-12 bg-gray-300">
  {#each Object.values($openPages) as page}
    <!-- layout -->
    <div
      class="flex items-center justify-center p-2 text-sm border-r border-gray-300"
      class:unselected={$selectedPage.id != page.id}
      class:selected={$selectedPage.id == page.id}
    >
      <!-- label -->
      <button class="flex items-center h-full pr-1" on:click={() => navigate(page)}>
        <!-- icon -->
        <div class="flex items-center justify-center w-6 h-6 pr-1">
          {#if page.type == "home"}
            <SvgHome />
          {/if}
          {#if page.type == "connections-table"}
            <SvgTable />
          {/if}
          {#if page.type == "connection-config"}
            <SvgConfig />
          {/if}
          {#if page.type == "simulators-table"}
            <SvgTable />
          {/if}
          {#if page.type == "simulator-config"}
            <SvgConfig />
          {/if}
          {#if page.type == "simulator-detail"}
            <SvgSimulator />
          {/if}

          {#if page.type == "queue"}
            <SvgQueue />
          {/if}
          {#if page.type == "export"}
            <SvgExport />
          {/if}
          {#if page.type == "load"}
            <SvgImport />
          {/if}
        </div>
        <!-- text -->
        {page.id}
      </button>
      <!-- close button -->
      <button aria-label={`Close ${page.id} page`} class="w-4 h-full" on:click={() => close(page)}>
        <SvgClose />
      </button>
    </div>
  {/each}
</div>

<style lang="postcss">
  .unselected {
    @apply text-gray-700 border-b bg-gray-200 hover:text-gray-800 focus:text-gray-800 active:text-gray-800;
  }

  .unselected:active {
    box-shadow: 0 4px 0 rgba(156, 163, 175, var(--tw-text-opacity)) inset;
  }

  .selected {
    box-shadow: 0 4px 0 rgba(5, 150, 105, var(--tw-bg-opacity)) inset;
    @apply text-gray-800 bg-gray-100;
  }
</style>
