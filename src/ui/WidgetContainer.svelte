<script>
  import { openWidget } from "../stores";
  import SimulatorsWidget from "./widgets/Simulators.svelte";
  import QueuesWidget from "./widgets/Queues.svelte";
</script>

<div class="h-full p-4 bg-gray-100 border-r border-gray-300 w-96">
  {#if $openWidget.type == "simulators"}
    <SimulatorsWidget />
  {/if}
  {#if $openWidget.type == "queues"}
    <QueuesWidget />
  {/if}
</div>
