<script lang="ts">
    import "../output.css";
    let { data, children } = $props();
</script>

<div class="flex h-auto mx-auto w-full md:w-9/12 md:h-16">
    <div class="flex w-full flex-wrap justify-between">
        <div class="w-1/2 md:w-1/6">
            <img src="img/metopotato1.png" alt="" class="h-16" />
        </div>

        <div class="flex w-full md:w-8/12 order-last md:order-none">
            <ul
                class="flex justify-center align-middle mx-auto my-4 text-lg md:w-8/12"
            >
                <li class="nav-items">
                    <a class="px-4" href="/">Home</a>
                </li>
                {#each data.categories as data}
                    <li class="nav-items">
                        <a class="px-4" href="/{data.category}"
                            >{data.category}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>

        <div class="flex justify-end items-center w-1/2 md:w-1/6">
            <div class="flex justify-around w-10/12">
                <div class="relative">
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"
                    >
                        🔍
                    </span>
                    <input
                        type="text"
                        class="search-bar w-full pl-10 py-2 border border-blue-200 placeholder-blue-200 rounded-2xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:placeholder-blue-400 focus:border-2"
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
<hr />

<div class="main">
    {@render children()}
</div>
