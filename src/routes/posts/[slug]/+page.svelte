<script>
  export let data;
</script>

<div class="flex flex-col">
  <h1>this is my post</h1>

  {@html data.html_content}
</div>
<div class="toc">
  {@html data.html_toc}
</div>
