<template>
    <div class="album">
        <img :src="albumData.poster" alt="albumData.title">
        <div class="album-meta">
            <h3 class="album-title">{{albumData.title}}</h3>
            <p class="album-author">{{albumData.author}}</p>
            <p class="album-year">{{albumData.year}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Album",
    props: {
        albumData: Object
    }
}
</script>

<style lang="scss">
    
    @import "../../assets/style/vars.scss";

    .album {

        .album-meta {
            margin-top: 20px;
            color: #707678;
        }

        .album-title {
            color: white;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        img {
            width: 100%;
        }
    }
</style>