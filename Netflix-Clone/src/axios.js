import axios from "axios";

//we installed it using npm install axios
//axios.create has the Initial req of www.,so we no need to mention it every single time
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
