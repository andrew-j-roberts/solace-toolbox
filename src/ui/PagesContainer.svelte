<script>
  import { selectedPage } from "../stores";
  import WelcomePage from "./pages/WelcomePage.svelte";
  import ConnectionConfigPage from "./pages/Connections/Config.svelte";
  import ConnectionsTablePage from "./pages/Connections/Table.svelte";
  import SimulatorConfigPage from "./pages/Simulators/Config.svelte";
  import SimulatorsTablePage from "./pages/Simulators/Table.svelte";
  import SimulatorDetailPage from "./pages/Simulators/Detail.svelte";
</script>

<div class="w-full h-full p-4 bg-gray-100">
  {#if $selectedPage.type == "home"}
    <WelcomePage />
  {:else if $selectedPage.type == "connections-table"}
    <ConnectionsTablePage />
  {:else if $selectedPage.type == "connection-config"}
    <ConnectionConfigPage />
  {:else if $selectedPage.type == "simulators-table"}
    <SimulatorsTablePage />
  {:else if $selectedPage.type == "simulator-config"}
    <SimulatorConfigPage />
  {:else if $selectedPage.type == "simulator-detail"}
    <SimulatorDetailPage />
  {/if}
</div>
