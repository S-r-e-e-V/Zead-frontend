import axios from "axios";

let API_URL = "https://zead-backend.herokuapp.com";

export default axios.create({
  baseURL: API_URL,
});
