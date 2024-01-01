<script>
  // @ts-nocheck

  import { sets } from "../store";
</script>

<div class="row">
  <div class="accordion" id="accordionPanelsStayOpen">
    {#each $sets as set, index}
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading-{index}">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse-{index}"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapse-{index}"
          >
            {set.name}
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse-{index}"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-heading{index}"
        >
          <div class="accordion-body">
            <textarea
              class="form-control"
              style="height: 150px;width: 100%;"
              value={set.value}
              on:change={(event) => {
                sets.addValueToSet(index, event.target.value);
              }}
            ></textarea>
            {#if set.isMaster == false}
              <button
                class="btn btn-danger mt-3"
                style="position: relative;left: 87%;bottom: 0;"
                on:click={() => {
                  console.log(index);
                  sets.removeSet(index);
                }}
              >
                -
              </button>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
<div class="row pt-4 pb-4">
  <div class="text-center">
    <button class="btn btn-primary ps-5 pe-5" on:click={() => sets.addSet()}>
      +
    </button>
  </div>
</div>
