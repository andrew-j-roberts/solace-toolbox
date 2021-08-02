<script>
  import { openPages, openWidget } from "../stores";
  import Toolbar from "./Toolbar.svelte";
  import TabsPanel from "./TabsPanel.svelte";
  import PagesContainer from "./PagesContainer.svelte";
  import WidgetsPanel from "./WidgetsPanel.svelte";
  import WidgetContainer from "./WidgetContainer.svelte";
</script>

<div class="grid grid-rows-[auto,1fr] w-screen h-screen">
  <Toolbar />
  <div class="grid grid-cols-[auto,1fr]">
    <!-- nav sidebar -->
    <WidgetsPanel />
    <!-- content -->
    <div class="flex">
      <!-- optional second sidebar -->
      {#if $openWidget.type != "none"}
        <WidgetContainer />
      {/if}
      <!-- tabs section -->
      <div class="flex flex-col flex-auto bg-gray-700 logoBackground overscroll-y-auto">
        {#if Object.keys($openPages.length > 0)}
          <TabsPanel />
          <PagesContainer />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .logoBackground {
    content: " ";
    background-image: url("/build/SvgSolaceToolkitLogo.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
