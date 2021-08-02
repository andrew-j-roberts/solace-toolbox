<script lang="ts">
  import { connectionOptions, selectedPage } from "../../../stores";
  import { connectionConfigPage, close } from "../../../routes";
  import type { EventBrokerConnection } from "../../../types";

  let localFormState: EventBrokerConnection = {
    id: "",
    userType: "Messaging",
    hostUrl: "",
    msgVpn: "",
    username: "",
    password: "",
  };

  if ($selectedPage.data) {
    localFormState = { ...$selectedPage.data };
  }

  function save() {
    connectionOptions.save({ ...localFormState });
    close(connectionConfigPage());
  }
</script>

<h1 class="mb-2 text-xl text-gray-800">Configure connection</h1>

<form class="grid gap-2">
  <label class="block mb-1 text-sm font-semibold text-gray-800" for="label">Label</label>
  <input
    name="label"
    type="text"
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:shadow-outline"
    bind:value={localFormState.id}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="label">Type</label>
  <select
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow focus:shadow-outline"
    bind:value={localFormState.userType}
  >
    <option value="Messaging">Messaging</option>
    <option value="SEMP">SEMP</option>
  </select>
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="host">Host URL</label>
  <input
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    name="hostUrl"
    type="text"
    bind:value={localFormState.hostUrl}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="msgVpn">Message VPN</label>
  <input
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    name="msgVpn"
    type="text"
    bind:value={localFormState.msgVpn}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="username">Username</label>
  <input
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    name="username"
    type="text"
    bind:value={localFormState.username}
  />
  <label class="block mb-1 text-sm font-semibold text-gray-800 " for="host">Password</label>
  <input
    class="w-full px-3 py-2 mb-1 leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    name="password"
    type="text"
    bind:value={localFormState.password}
  />
  <div class="flex items-center">
    <button
      on:click|preventDefault={save}
      type="submit"
      class="inline-flex items-center px-4 py-2 mr-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:bg-green-500 active:bg-green-700"
      >Save</button
    >
    <button
      on:click|preventDefault={() => close(connectionConfigPage())}
      class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:bg-red-500 active:bg-red-700"
      >Cancel</button
    >
  </div>
</form>
