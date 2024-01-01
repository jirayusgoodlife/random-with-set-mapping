<script>
  import { sets } from "../store";
  import { randoms } from "../store";
</script>

<table class="table table-responsive table-striped">
  <thead>
    <tr>
      <td width="5px">#</td>
      <td>Master Sets</td>
      {#if $randoms.length > 0 && $randoms[0].random.length > 0}
        {#each [...$randoms[0].random].reverse() as ran, index}
          <td>Round {$randoms[0].random.length - index}</td>
        {/each}
      {/if}
    </tr>
  </thead>
  <tbody>
    {#each $randoms as ran, index}
      <tr>
        <td>{index + 1}</td>
        <td>{ran.item}</td>
        {#if $randoms.length > 0 && $randoms[0].random.length > 0}
          {#each [...$randoms[0].random].reverse() as ran}
            <td>{ran}</td>
          {/each}
        {/if}
      </tr>
    {/each}
  </tbody>
</table>
