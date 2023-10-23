import axios from "axios";

let URL = "";

switch (process.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "https://fakestoreapi.com";
    break;
  case "PRODUCTION":
    URL = "https://productsserver.com";
    break;

  default:
    URL = "https://fakestoreapi.com";
}

const instance = axios.create({
  baseURL: URL,
});

export default instance;
