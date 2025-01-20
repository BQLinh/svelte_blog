<script lang="ts">
    let src = "img/cat.jpeg";
    import "../app.css";
    export let data;
</script>

div

<!-- <div>
    <img {src} alt="cat" />
</div>
<div>
    {@html data.content}
</div>
<div class="toc">
    <h2>Table of Contents</h2>

    {@html data.toc}
</div> -->

<style>
    .toc {
        position: sticky;
        top: 1rem;
        background: #f9f9f9;
        padding: 1rem;
        border: 1px solid #ddd;
        max-width: 300px;
    }
    .toc a {
        text-decoration: none;
        color: #007bff;
    }
    .toc a:hover {
        text-decoration: underline;
    }
    .content {
        padding: 1rem;
    }
</style>
