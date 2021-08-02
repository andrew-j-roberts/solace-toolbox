<script>
  import { getContext } from "svelte";
  import { simulators, connectionOptions } from "../../../stores";

  let localFormState = {
    label: "",
    payloadTemplate: "",
    connectionType: "",
    brokerConfig: {},
    publishRateMs: 1000,
    status: "stopped",
  };

  function saveConfig() {
    simulators.add({ ...localFormState });
  }

  function close() {
    return null;
  }
</script>

<h1 class="mb-2 text-xl">Edit simulator</h1>

<form class="grid gap-2">
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="label"
    >Label</label
  >
  <input
    name="label"
    type="text"
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:shadow-outline"
    bind:value={localFormState.label}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="label"
    >Payload template</label
  >
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.payloadTemplate}
  >
    <option value="Orders">Orders</option>
  </select>
  <label
    class="block mb-1 text-sm font-semibold text-gray-800"
    for="connectionType">Connection type</label
  >
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.connectionType}
  >
    <option value="solace">SMF (Solace)</option>
    <option value="mqtt">MQTT</option>
    <option value="rest">REST</option>
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="msgVpn"
    >Broker connection details</label
  >
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.brokerConfig}
  >
    {#each [...$connectionOptions.values()] as brokerConfig}
      <option value={brokerConfig}>{brokerConfig.label}</option>
    {/each}
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="username"
    >Publish rate in milliseconds</label
  >
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
</form>
