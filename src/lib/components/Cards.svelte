<script>
  export let id;
  import img from "$lib/images/science.jpg";
</script>

<div
  class="rounded-2xl h-88 mx-6 mb-6 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-103 hover:shadow-lg hover:shadow-slate-400"
>
  <a href="/posts/{id}">
    <img src={img} alt="123" class="h-48 w-full object-cover" />
    <div class="px-3 py-1 justify h-">
      <div class="text-xl text-center text-sky-500">This is first content</div>
      <div class="card-intro text-sky-500 font-medium text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, incidunt
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit
      </div>
    </div>
    <hr />
    <div class="px-5 py-2 flex justify-between bottom-0">
      <p class="topic text-violet-500">Science</p>
      <p class="time text-pink-500">12/2025</p>
    </div>
  </a>
</div>

<style>
</style>
