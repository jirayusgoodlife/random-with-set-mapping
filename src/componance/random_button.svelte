<script>
  import { randoms, sets } from "../store";

  function randomAgain() {
    if ($randoms.length > 0) {
      randomValue($randoms[0].random.length - 1);
    }
  }
  function randomNext() {
    if ($randoms.length > 0) {
      randomValue($randoms[0].random.length);
    }
  }
  function randomValue(index) {
    if ($randoms.length > 0) {
      $randoms.forEach((random, ix) => {
        randoms.addRandomValue(ix, index, "test");
      });
    }
  }
</script>

<div class="col-12">
  <div class="text-center pt-3 pb-4">
    <button
      class="btn btn-primary"
      on:click={() => randomNext()}
      disabled={$sets.length <= 1 || $randoms.length < 1}
    >
      Random {#if $randoms.length > 0 && $randoms[0].random.length > 0}
        next round{/if}
    </button>
    {#if $randoms.length > 0 && $randoms[0].random.length > 0}
      <button
        class="btn btn-primary"
        on:click={() => randomAgain()}
        disabled={$sets.length <= 1}
      >
        Random again
      </button>
      <button
        class="btn btn-secondary"
        on:click={() => randoms.resetRandomValue()}
        disabled={$sets.length <= 1}
      >
        Clear Random Values
      </button>
    {/if}
  </div>
</div>
