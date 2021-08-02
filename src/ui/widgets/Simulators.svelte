<script lang="ts">
  import { openPages, simulators, selectedPage } from "../../stores";
  import { navigate, simulatorsTablePage, simulatorConfigPage, simulatorDetailPage } from "../../routes";
  import SvgAdd from "../icons/SvgAdd.svelte";
  import SvgCollection from "../icons/SvgCollection.svelte";
</script>

<div class="grid h-full grid-rows-[auto,1fr,1fr]">
  <h1 class="mb-4 text-xl">Simulators</h1>
  <div>
    <div class="flex">
      <button
        class="mb-2 mr-2 flex items-center p-2 text-gray-700 border border-[#dddddd] hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-300 focus:text-gray-800"
        on:click={() => {
          navigate(simulatorsTablePage);
        }}
      >
        <div class="flex items-center justify-center w-6 h-6 ">
          <SvgCollection />
        </div>
        Simulators table
      </button>
      <button
        class="mb-2 flex items-center p-2 text-gray-700 border border-[#dddddd] hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-300 focus:text-gray-800"
        on:click={() => {
          navigate(simulatorConfigPage);
        }}
      >
        <div class="flex items-center justify-center w-6 h-6 ">
          <SvgAdd />
        </div>
        Add simulator
      </button>
    </div>

    <table class="w-full mb-4">
      <tr>
        <th>Label</th>
        <th>Status</th>
      </tr>

      {#each Object.values($simulators) as simulator}
        <tr
          aria-label={`View ${"label"} detail page`}
          tabindex="0"
          class="min-h-full cursor-pointer hover:ring-4 group"
          on:click={() => {
            navigate(simulatorDetailPage("blah"));
          }}
        >
          <td class="group-hover:text-blue-700 group-hover:underline group-focus:text-blue-700 group-focus:underline "
            >{simulator.id}</td
          >
          <td class="flex justify-center">
            {#if simulator.status == "new"}
              ⚪
            {:else if simulator.status == "running"}
              🟢
            {:else if simulator.status == "stopped"}
              🔴
            {:else}
              ❗
            {/if}
          </td>
        </tr>
      {/each}
    </table>
  </div>
  <div>
    <h2 class="mb-4 text-xl">Payload templates</h2>
    <button
      class="mb-2 flex items-center p-2 text-gray-700 border border-[#dddddd] hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-300 focus:text-gray-800"
      on:click={() => {}}
    >
      <div class="flex items-center justify-center w-6 h-6 ">
        <SvgAdd />
      </div>
      Add payload template
    </button>
    <div class="flex flex-col items-center">
      <button class="flex flex-col p-4 text-left border rounded-md hover:ring-2 group">
        <h3
          class="font-semibold group-hover:text-blue-700 group-hover:underline group-focus:text-blue-700 group-focus:underline"
        >
          Orders Simulator
        </h3>
        <p>Loosely modeled after Shopify's Order object</p>
      </button>
    </div>
  </div>
</div>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
