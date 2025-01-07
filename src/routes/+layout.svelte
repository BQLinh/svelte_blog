<script>
    import "../output.css";

    let text =
        "Hello everyone! Welcome to my blog. Hope you guys can find some helpful things here";

    // Tách đoạn text thành từng từ
    let words = text.split(" ");
</script>

<div class="flex h-16 mx-auto w-9/12">
    <div class="flex w-full">
        <div class="icon w-1/6">
            <img src="img/metopotato1.png" alt="" class="h-16" />
        </div>

        <nav class="w-8/12">
            <ul class="flex justify-center align-middle mx-auto my-4 text-lg">
                <li class="nav-items">Home</li>
                <li class="nav-items">Science</li>
                <li class="nav-items">Math</li>
                <li class="nav-items">Chess</li>
                <li class="nav-items">Philosophy</li>
                <li class="nav-items">Life</li>
                <li class="nav-items">Tech</li>
            </ul>
        </nav>

        <div class="flex justify-end items-center icon w-1/6">
            <div class="flex justify-around w-10/12">
                <img src="img/login_icon.png" alt="" class="h-8" />
                <img src="img/facebook.jpeg" alt="" class="h-8" />
                <img src="img/instagram1.png" alt="" class="h-8" />
            </div>
        </div>
    </div>
</div>
<hr />
<!-- <div
    class="personal-banner w-9/12 mx-auto h-52 bg-banner rounded-md mt-8 p-2 text-5xl font-extrabold flex items-center text-center"
>
    <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500"
    >
        Hello everyone! Welcome to my blog. Hope you guys can find some helpful
        things here
    </span>
</div> -->

<div
    class="personal-banner w-9/12 mx-auto h-52 bg-banner rounded-xl mt-8 p-2 text-5xl font-extrabold flex items-center text-center"
>
    <div
        class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 w-full"
    >
        {#each words as word, index}
            <span
                class="word inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500"
                style="animation-delay: {index * 0.2}s"
            >
                {word}
            </span>
            <span> </span>
        {/each}
    </div>
</div>

<div class="main">
    <slot></slot>
</div>

<style>
    .word {
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
