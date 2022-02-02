<template>
    
    <div class="filter-search">
        <select name="keyData" id="keyData" v-model="value" @change="$emit('changed', {type:keyData, value:value} )">
            <option value='' selected>All</option>
            <option v-for="(item, index) in optionsArr" :value="item" :key="index">{{item}}</option>
        </select>
    </div>

</template>

<script>

    import axios from "axios";

    export default {

        name: "SelectFilter",
        data() {
            return {

                optionsArr: [],
                apiURL: "https://flynn.boolean.careers/exercises/api/array/music",
                value: "",
            }
        },
        methods: {
            getOptionsArr(){
                axios
                    .get(this.apiURL)
                    .then((response) => {
                        
                        // this.optionsArr = response.data.response.filter((item) => {
                        //     console.log(item[this.keyData]);
                        //     console.log(this.optionsArr); //NOT WORKING! NON VISIBILE IN QUESTO MOMENTO
                        //     return (!this.optionsArr.includes(item[this.keyData]));
                        // })
                        // .map( x => x[this.keyData]);

                        response.data.response.forEach((discItem) => {
                            if (!this.optionsArr.includes(discItem[this.keyData])) {
                                this.optionsArr.push(discItem[this.keyData]);
                            }
                        });
                        console.log(this.optionsArr);
                    })
                    .catch((error) => {
                        console.log(error);                        
                    });                     
            },
            
        },
        created() {

            this.getOptionsArr();
        },
        props: {
            keyData: String,
        }
    }
</script>

<style>

</style>