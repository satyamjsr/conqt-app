import axios from "axios";

const instance = axios.create({
  baseURL: "https://apis-technical-test.conqt.com/",
});

export default instance;
