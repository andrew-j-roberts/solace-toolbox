<script>
  import { navigate, connectionConfigPage } from "../../../routes";
  import { connectionOptions } from "../../../stores";
  import SvgAdd from "../../icons/SvgAdd.svelte";
  import SvgEdit from "../../icons/SvgEdit.svelte";
  import SvgTrash from "../../icons/SvgTrash.svelte";
</script>

<button
  class="mb-2 flex items-center justify-center p-2 text-gray-700 border border-[#dddddd] hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-300 focus:text-gray-800"
  on:click={() => navigate(connectionConfigPage())}
>
  <div class="flex items-center justify-center w-6 h-6 ">
    <SvgAdd />
  </div>
  Add broker
</button>

<table class="w-full">
  <tr>
    <th>ID</th>
    <th>User type</th>
    <th>Host URL</th>
    <th>Message VPN</th>
    <th>Username</th>
    <th>Password</th>
    <th>Actions</th>
  </tr>
  {#each Object.values($connectionOptions) as brokerConfig}
    <tr>
      <td>{brokerConfig.id}</td>
      <td>{brokerConfig.userType}</td>
      <td>{brokerConfig.hostUrl}</td>
      <td>{brokerConfig.msgVpn}</td>
      <td>{brokerConfig.username}</td>
      <td>{brokerConfig.password}</td>
      <td class="flex items-center h-full">
        <button
          aria-label="Edit"
          class="w-6 h-6 mr-1 text-green-700 hover:text-green-800 focus:text-green-800"
          on:click={() => navigate(connectionConfigPage(brokerConfig))}
        >
          <SvgEdit />
        </button>
        <button
          aria-label="Delete"
          class="w-6 h-6 text-red-700 hover:text-red-800 focus:text-red-800"
          on:click={() => connectionOptions.delete(brokerConfig)}
        >
          <SvgTrash />
        </button>
      </td>
    </tr>
  {/each}
</table>

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
