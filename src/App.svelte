<script>
  import SetsValue from "./componance/sets_value.svelte";
  import RandomValue from "./componance/random_value.svelte";
  import RandomButton from "./componance/random_button.svelte";
  import { sets } from "./store";

  let haveSaveSetData = isHaveSaveSetData();

  function isHaveSaveSetData() {
    return window.localStorage.getItem("sets") != null;
  }
  function saveSet() {
    console.log(JSON.stringify($sets));
    window.localStorage.setItem("sets", JSON.stringify($sets));
    haveSaveSetData = true; // Update reactive variable
  }
  function loadSet() {
    window.localStorage.getItem("sets") &&
      sets.loadSet(JSON.parse(window.localStorage.getItem("sets")));
    haveSaveSetData = true; // Update reactive variable
  }
  function clearSet() {
    window.localStorage.clear();
    sets.resetSet();
    haveSaveSetData = false; // Update reactive variable
  }
</script>

<div class="row">
  <RandomButton />
</div>
<div class="row">
  <div class="col-7"><RandomValue /></div>
  <div class="col-5"><SetsValue /></div>
</div>
<div class="row">
  <div class="col-12">
    <div class="float-end">
      {#if haveSaveSetData}
        <button class="btn btn-secondary" on:click={() => clearSet()}>
          Clear
        </button>
        <button class="btn btn-info" on:click={() => loadSet()}>
          Load Previous Session
        </button>
      {/if}
      <button class="btn btn-success" on:click={() => saveSet()}>
        Save Session
      </button>
    </div>
  </div>
</div>
