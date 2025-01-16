<script>
  import Cards from "$lib/components/Cards.svelte";
  import TopicCard from "$lib/components/TopicCard.svelte";
  import Label from "$lib/components/Label.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  let { data } = $props();

  const colors = [
    "text-red-600",
    "text-orange-600",
    "text-green-600",
    "text-blue-600",
    "text-amber-500",
    "text-lime-600",
    "text-rose-600",
    "text-violet-600",
    "text-emerald-600",
    "text-pink-600",
    "text-indigo-600",
  ];
</script>

<div class="flex w-full mx-auto mt-4">
  <div class="w-2/12 border-gray-200 min-h-full">
    <!-- <SearchBar></SearchBar>
    <hr class="my-4" /> -->
    <ul>
      {#each data.mytopics as topic, index}
        <li class={`topics ${colors[index % colors.length]} topic-trans`}>
          <a href="/{topic.category}/{topic.topic}">{topic.topic}</a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="flex w-10/12">
    <div></div>
    <div class="w-4/5">
      <div class="mx-6">
        <Label title="heheheheh"></Label>
      </div>

      <div class="grid grid-cols-2 auto-rows-min">
        {#each data.myposts as post}
          <Cards></Cards>
        {/each}
      </div>
    </div>

    <div class="flex flex-col justify-center w-1/5">
      <div>
        {#each data.related_posts as post}
          <TopicCard></TopicCard>
        {/each}
      </div>
    </div>
  </div>
</div>
