<script>
  let { data, children } = $props();
</script>

<div>
  {#each data.mytopics as data}
    <p>data.topic</p>
  {/each}
</div>
