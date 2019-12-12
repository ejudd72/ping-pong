// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://ellieellie.restful.training/api/ping-pong",

    // use your own key
    params: {
        key: "d72883032dcdbd70c81d333d50ed5580050b7842",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});