<script lang="ts">
  import { simulators, connectionOptions } from "../../../stores";
  import type { Simulator } from "../../../types";
  import { getCurrentTimeHHMMSS } from "../../../utils";

  // use first simulator in store as default values
  let localFormState: Simulator = { ...$simulators[Object.keys($simulators)[0]] };

  let statusText = "";

  function saveConfig() {
    simulators.save({ ...localFormState });
    statusText = `Saved successfully at ${getCurrentTimeHHMMSS()}`;
  }

  function close() {
    return null;
  }
</script>

<h1 class="mb-2 text-xl">Add new simulator</h1>

<form class="grid gap-2">
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="label">Label</label>
  <input
    name="label"
    type="text"
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:shadow-outline"
    bind:value={localFormState.id}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="label">Simulator type</label>
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.simulatorType}
  >
    <option value="order-create">order-create</option>
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="messagingClientType">Messaging client</label>
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.messagingClientType}
  >
    <option value="solclientjs">solclientjs</option>
    <option value="MQTT.js">MQTT.js</option>
    <option value="REST">REST</option>
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="msgVpn">Connection details</label>
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.connectionDetails}
  >
    {#each Object.values($connectionOptions) as brokerConfig}
      <option value={brokerConfig.id}>{brokerConfig.id}</option>
    {/each}
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="username">Publish rate in milliseconds</label>
  <input
    class="w-full px-3 py-2 mb-4 leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    name="username"
    type="text"
    bind:value={localFormState.publishRateMs}
  />
  <div class="flex items-center">
    <button
      on:click|preventDefault={saveConfig}
      type="submit"
      class="inline-flex items-center px-4 py-2 mr-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:bg-green-500 active:bg-green-700"
      >Save</button
    >
    <button
      on:click|preventDefault={close}
      class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:bg-red-500 active:bg-red-700"
      >Cancel</button
    >
  </div>
  {#if statusText}
    <span class="text-green-600">
      {statusText}
    </span>
  {/if}
</form>
