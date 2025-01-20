<script lang="ts">
    import Label from "$lib/components/Label.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";
    import logo from "$lib/images/logo.png";
    import fb from "$lib/images/fb.webp";
    import Icon from "$lib/components/Icon.svelte";
    let { data, children } = $props();
</script>

<div class="">
    <div class="flex h-auto mx-auto w-full lg:w-10/12 lg:h-16">
        <div class="flex w-full flex-wrap justify-between">
            <div class="w-1/2 lg:w-1/6">
                <img src={logo} alt="" class="h-16" />
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

    <div class="flex w-full md:w-10/12 mx-auto">
        {@render children()}
    </div>

    <div>
        <hr />
        <div
            class="footer text-sky-500 flex h-auto mx-auto w-full lg:w-10/12 font-inter pt-4 mb-4 py-5"
        >
            <div class="w-2/12 rounded-md">
                <div
                    class="h-full text-center mb-2 px-1 py-3 rounded-md shadow-lg shadow-slate-400 border-t-2 border-sky-200 hover:border-r-sky-600"
                >
                    <p>
                        Hi guys! I'm Metopotato. Hope you guys can find
                        somethings here
                    </p>
                </div>
            </div>

            <div class=" w-8/12 rounded-md">
                <div
                    class="h-full text-center mb-2 py-3 rounded-md shadow-lg shadow-slate-400 border-t-2 border-sky-200 hover:border-r-sky-600 mx-16"
                >
                    "Good people are good because they've come to wisdom through
                    failure." "Your word is a lamp for my feet, a light for my
                    path." "The first problem for all of us, men and women, is
                    not to learn, but to unlearn." "Be wise like serpents and
                    harmless like doves."
                </div>
            </div>

            <div class=" w-2/12 rounded-md">
                <div
                    class=" h-full text-center mb-2 px-1 py-3 rounded-md shadow-lg shadow-slate-400 border-t-2 border-sky-200 hover:border-r-sky-600"
                >
                    <h1>Follow me on</h1>
                    <div class=" flex justify-around items-center">
                        <Icon url={fb}></Icon>
                        <Icon url={fb}></Icon>
                        <Icon url={fb}></Icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
