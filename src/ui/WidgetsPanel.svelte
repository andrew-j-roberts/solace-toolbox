<script>
  import { openWidget } from "../stores";
  import { noOpenWidget, simulatorsWidget, queueManagerWidget } from "../routes";
  import SvgQueue from "./icons/SvgQueue.svelte";
  import SvgSimulator from "./icons/SvgSimulator.svelte";

  function handleSelection(widget) {
    if ($openWidget.type == widget.type) {
      openWidget.set(noOpenWidget);
    } else {
      openWidget.set(widget);
    }
  }
</script>

<div class="flex flex-col items-center bg-gray-500">
  <button
    class="flex flex-col items-center w-full p-2 text-lg"
    class:unselected={$openWidget.type != "simulators"}
    class:selected={$openWidget.type == "simulators"}
    on:click={() => handleSelection(simulatorsWidget)}
  >
    <div class="w-8 mr-1">
      <SvgSimulator />
    </div>
    Simulators
  </button>
  <button
    class="flex flex-col items-center w-full p-2 text-lg"
    class:unselected={$openWidget.type != "queue-manager"}
    class:selected={$openWidget.type == "queue-manager"}
    on:click={() => handleSelection(simulatorsWidget)}
  >
    <div class="w-8 mr-1">
      <SvgQueue />
    </div>
    Queues
  </button>
</div>

<style lang="postcss">
  .unselected {
    @apply text-gray-300 hover:text-gray-50 focus:text-gray-50 active:text-gray-50;
  }

  .unselected:active {
    box-shadow: 4px 0 0 rgba(156, 163, 175, var(--tw-text-opacity)) inset;
  }

  .selected {
    box-shadow: 4px 0 0 rgba(5, 150, 105, var(--tw-bg-opacity)) inset;
    @apply text-gray-50 bg-[rgba(5,150,105,0.2)];
  }
</style>
