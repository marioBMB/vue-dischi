
import axios from "axios";
const apiURL = "https://flynn.boolean.careers/exercises/api/array/music";
let songList = [];

axios
    .get(apiURL)
    .then((response) => {
    
        songList = response.data;
    })
    .catch((error) => {
        console.log(error);                        
    });


export default songList;