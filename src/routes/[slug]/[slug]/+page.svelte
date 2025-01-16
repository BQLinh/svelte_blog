<script>
  let { data } = $props();
</script>

<div class="w-2/12">
  <ul>
    {#each data.mytopics as topic}
      <li><a href="/{topic.category}/{topic.topic}">{topic.topic}</a></li>
    {/each}
  </ul>
</div>

<div class="w-10/12 flex bg-slate-400">
  <div class="w-9/12">
    {#each data.myposts as post}
      <p>{post.content}</p>
    {/each}
  </div>
  <div class="w-3/12">
    {#each data.related_posts as post}
      <p>{post.content}</p>
    {/each}
  </div>
</div>
