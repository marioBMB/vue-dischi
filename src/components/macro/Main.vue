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
                selectedFilters: {
                    genre:'',
                    author:''
                },
                filteredAlbums: [],
            }
        },
        methods: {

            updateFilters(payload) {

                if (Object.prototype.hasOwnProperty.call(this.selectedFilters, payload.type )){
                    
                    this.selectedFilters[ payload.type ] = payload.value;
                    console.log("selectedFilters", this.selectedFilters);
                }
            },
            getAlbumsData(){
                axios
                    .get(this.apiURL)
                    .then((success) => {
                        this.albums = success.data.response;
                        this.filteredAlbums = this.albums;
                        this.loading = false;
                    })
                    .catch((error) => {
                        console.log(error);                        
                    })
            },
            filterData(){

                let filtered = this.albums;
                Object.keys(this.selectedFilters).forEach((key) => {
                    filtered = this.filterArray( filtered, key );
                });

                this.filteredAlbums = filtered;
            },
            filterArray( array, field ){

                if( this.selectedFilters[field] == "") return array;
                
                return array.filter( (elem) =>  {
                    return elem[field] == this.selectedFilters[field];
                });
            }
        },
        created(){
            this.getAlbumsData();
        },
        computed: {
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