<template>
    <div class="album-container">
        <Album v-for="(album, index) in albumListData" :key="index" :albumData="album" />
    </div>
</template>

<script>

    import Album from "../commons/Album.vue";

    export default {
        
        name: "AlbumCollecion",
        components: {
            Album,
        },
        data() {
            return {
            }
        },
        methods: {
            
        },
        props: {
            keyData: String,
            albumListData: Array,
        }
        
    }
</script>

<style lang="scss">

    @import "../../assets/style/vars.scss";

    .album-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .album {
            background-color: $lightIndigoGrey;
            width: 200px;
            margin: 20px;
            padding: 20px;
            text-align: center;
        }
    }
</style>