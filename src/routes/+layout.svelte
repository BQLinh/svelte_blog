<script>
    import "../output.css";
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
                <li class="nav-items">Home</li>
                <li class="nav-items">Science</li>
                <li class="nav-items">Math</li>
                <li class="nav-items">Chess</li>
                <li class="nav-items">Philosophy</li>
                <li class="nav-items">Life</li>
                <li class="nav-items">Tech</li>
            </ul>
        </div>

        <div class="flex justify-end items-center w-1/2 md:w-1/6">
            <div class="flex justify-around w-10/12">
                <img src="img/login_icon.png" alt="" class="h-8" />
                <img src="img/facebook.jpeg" alt="" class="h-8" />
                <img src="img/instagram1.png" alt="" class="h-8" />
            </div>
        </div>
    </div>
</div>
<hr />

<div class="main">
    <slot></slot>
</div>

<!-- <div class="container">
    <div class="d1 bg-blue-500">Div 1</div>
    <div class="d2 bg-green-500">Div 2</div>
    <div class="d3 bg-red-500">Div 3</div>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Adds space between the divs */
    }

    /* Default layout for large screens - all divs in one row */
    .d1,
    .d2,
    .d3 {
        flex: 1;
    }

    /* Layout for smaller screens */
    @media (max-width: 768px) {
        .container {
            /* Change direction to create two rows */
            justify-content: space-between;
        }

        .d1,
        .d3 {
            /* Make d1 and d3 take less width to fit on same row */
            flex: 0 0 45%;
        }

        .d2 {
            /* Make d2 take full width on second row */
            flex: 0 0 100%;
            order: 1; /* Push d2 below d1 and d3 */
        }
    }
</style> -->
