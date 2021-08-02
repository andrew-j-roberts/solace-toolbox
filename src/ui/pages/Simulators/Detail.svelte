<script>
  import JSONTree from "svelte-json-tree-auto";
  import { getContext } from "svelte";
  import Dialogue from "./Dialogue.svelte";
  import SvgAdd from "../../icons/SvgAdd.svelte";
  import SvgEdit from "../../icons/SvgEdit.svelte";
  import SvgTrash from "../../icons/SvgTrash.svelte";

  //
  export let openSimulator;

  // modal dialogue
  const { open } = getContext("simple-modal");

  function openDialogue(brokerConfig) {
    open(Dialogue, {});
  }
</script>

<h1 class="mb-4 text-xl">{openSimulator.label}</h1>

<div class="flex mb-2" style="--json-tree-font-size: 1rem;">
  <p class="mr-4 font-semibold">Payload template</p>
  <div class="flex items-center">
    <JSONTree value={openSimulator.brokerConfig} />
  </div>
</div>

<div class="flex items-center mb-2">
  <p class="mr-4 font-semibold">Connection type</p>
  <p>{openSimulator.connectionType}</p>
</div>

<div class="flex mb-2" style="--json-tree-font-size: 1rem;">
  <p class="mr-4 font-semibold">Connection details</p>
  <div class="flex items-center">
    <JSONTree value={openSimulator.brokerConfig} />
  </div>
</div>

<div class="flex items-center mb-2">
  <p class="mr-4 font-semibold">Publish rate</p>
  <p>1 message per {openSimulator.publishRateMs} ms</p>
</div>

<div class="flex items-center mb-4">
  <p class="mr-4 font-semibold">Status</p>
  {#if openSimulator.status == "running"}
    Running 🟢
  {:else if openSimulator.status == "stopped"}
    Stopped 🔴
  {:else}
    Error ❗
  {/if}
</div>

<div class="flex items-center">
  <button
    on:click|preventDefault={() => {}}
    type="submit"
    class="inline-flex items-center px-4 py-2 mr-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:bg-green-500 active:bg-green-700"
    >Start</button
  >
  <button
    on:click|preventDefault={() => {}}
    class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:bg-red-500 active:bg-red-700"
    >Stop</button
  >
</div>
