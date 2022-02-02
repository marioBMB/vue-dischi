<template>
    <main>
        <div class="container">

            <div class="searchbar">
                <SelectFilter keyData="genre" @changed="updateFilters"/>
                <SelectFilter keyData="author" @changed="updateFilters"/>
                <button id="submit" type='submit' @click="filterData">
                    Cerca
                </button>
            </div>

            <AlbumCollection v-if="!loading" :albumListData="filteredAlbums"/>
            <Loader v-else/>
        </div>
    </main>
</template>

<script>

    import axios from "axios";
    import AlbumCollection from "../sections/AlbumCollection.vue";
    import Loader from "../commons/Loader.vue";
    import SelectFilter from "../commons/SelectFilter.vue";

    export default {

        name: "Main",
        components: {
            AlbumCollection,
            SelectFilter,
            Loader,
        },
        data(){
            return {

                apiURL: "https://flynn.boolean.careers/exercises/api/array/music",
                loading: true,
                albums: [],
                selectedFilters: [],
                filteredAlbums: [],
            }
        },
        methods: {

            updateFilters(payload) {

                // se non esistono, aggiungi chiavi e valori all'array delle chiavi scelte
                this.selectedFilters[payload[0]] = payload[1];
            },
            getAlbumsData(){
                axios
                    .get(this.apiURL)
                    .then((success) => {
                        this.albums = success.data.response;
                        this.loading = false;
                    })
                    .catch((error) => {
                        console.log(error);                        
                    })
            },
            filterData(){

                this.filteredAlbums = this.albums.filter((obj) => {

                    return this.selectedFilters[0].every(() => this.selectedFilters[1].includes(obj.key));
                });
            },
        },
        created(){
            this.getAlbumsData();
        },
        computed: {

            /* albumFiltratiGenere(){
                return this.albumsData.filter((album) => {
                    return album.genre.toLowerCase() == this.genre.toLowerCase() // | this.genre == ""
                });
            }, */
        }
    }
</script>

<style lang='scss'>

    @import "../../assets/style/vars.scss";

    main {
        width: 100%;
        min-height: calc(100vh - 80px);
        background-color: $darkSlateGrey;
        padding: 40px;
    }
</style>