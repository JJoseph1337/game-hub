import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c99c6d2364e9480180f4919f10f53202",
    }
})