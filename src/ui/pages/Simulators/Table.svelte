<script>
  import { simulators } from "../../../stores";
  import SvgStart from "../../icons/SvgStart.svelte";
  import SvgStop from "../../icons/SvgStop.svelte";
  import SvgEdit from "../../icons/SvgEdit.svelte";
  import SvgTrash from "../../icons/SvgTrash.svelte";
</script>

<table class="w-full">
  <tr>
    <th>ID</th>
    <th>Messaging client</th>
    <th>Simulator type</th>
    <th>Connection</th>
    <th>Publish rate</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
  {#each Object.values($simulators) as simulator}
    <tr>
      <td>{simulator.id}</td>
      <td>{simulator.messagingClientType}</td>
      <td>{simulator.simulatorType}</td>
      <td>{simulator.connectionDetails?.id}</td>
      <td>{simulator.publishRateMs}</td>
      <td>{simulator.status}</td>
      <td class="flex items-center h-full">
        <button
          aria-label="Start"
          class="w-6 h-6 mr-1 text-green-700 hover:text-green-800 focus:text-green-800"
          on:click={() => {}}
        >
          <SvgStart />
        </button>
        <button
          aria-label="Stop"
          class="w-6 h-6 mr-1 text-red-700 hover:text-red-800 focus:text-red-800"
          on:click={() => {}}
        >
          <SvgStop />
        </button>
        <button
          aria-label="Edit"
          class="w-6 h-6 mr-1 text-green-700 hover:text-green-800 focus:text-green-800"
          on:click={() => {}}
        >
          <SvgEdit />
        </button>
        <button
          aria-label="Delete"
          class="w-6 h-6 text-red-700 hover:text-red-800 focus:text-red-800"
          on:click={() => {}}
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
