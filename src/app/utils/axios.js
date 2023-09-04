import axios from "axios";
import {baseurl} from "./variable";

const Axios = axios.create({baseURL:baseurl});
export default Axios;