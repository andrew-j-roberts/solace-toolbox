<script lang="ts">
  import { navigate, welcomePage, connectionsTablePage } from "../routes";
  import SvgSolaceToolkitLogo from "./icons/SvgSolaceToolkitLogo.svelte";
  import SvgConnection from "./icons/SvgConnection.svelte";
  import SvgSave from "./icons/SvgExport.svelte";
  import SvgImport from "./icons/SvgImport.svelte";
</script>

<div class="flex items-center border-b bg-gray-50">
  <button
    aria-label="Welcome"
    class="flex items-center justify-center p-2 text-gray-700 border-r hover:bg-gray-200 focus:bg-gray-300"
    on:click={() => navigate(welcomePage)}
  >
    <div class="flex items-center justify-center w-6 h-6 ">
      <SvgSolaceToolkitLogo />
    </div>
  </button>
  <button
    class="flex items-center justify-center p-2 text-gray-700 border-r hover:bg-gray-200 focus:bg-gray-300"
    on:click={() => navigate(connectionsTablePage)}
  >
    <div class="flex items-center justify-center w-6 h-6 pr-1">
      <SvgConnection />
    </div>
    Connection options
  </button>
  <button
    class="flex items-center justify-center p-2 text-gray-700 border-r hover:bg-gray-200 focus:bg-gray-300"
    on:click={() => navigate(welcomePage)}
  >
    <div class="flex items-center justify-center w-6 h-6 pr-1">
      <SvgImport />
    </div>
    Import
  </button>
  <button
    class="flex items-center justify-center p-2 text-gray-700 border-r hover:bg-gray-200 focus:bg-gray-300"
    on:click={() => navigate(welcomePage)}
  >
    <div class="flex items-center justify-center w-6 h-6 pr-1">
      <SvgSave />
    </div>
    Export
  </button>
</div>
