<script lang="ts">
    import SearchBar from "$lib/components/SearchBar.svelte";
    import "../output.css";
    let { data, children } = $props();
</script>

<div class="">
    <div class="flex h-auto mx-auto w-full lg:w-9/12 lg:h-16">
        <div class="flex w-full flex-wrap justify-between">
            <div class="w-1/2 lg:w-1/6">
                <img src="img/metopotato1.png" alt="" class="h-16" />
            </div>

            <div class="flex w-full lg:w-8/12 order-last lg:order-none">
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

            <div class="flex justify-end items-center w-1/2 lg:w-1/6">
                <div class=" w-full">
                    <SearchBar></SearchBar>
                </div>
            </div>
        </div>
    </div>
    <hr />

    <div class="flex w-full md:w-9/12 mx-auto">
        {@render children()}
    </div>

    <div class="footer flex h-auto mx-auto w-full lg:w-9/12 lg:h-16 font-inter">
        <h1>huhuhuh hehehe</h1>
    </div>
</div>
