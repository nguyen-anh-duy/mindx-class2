import axios from "axios";

const baseURL = "https://api.github.com"
const userAPI = {
    searchUser : (search) => {
        return axios.get(`${baseURL}/search/users?q=${search}`)
    },
    fetchUser : () => {
        return axios.get("https://api.github.com/users");
    }
}
export default userAPI;