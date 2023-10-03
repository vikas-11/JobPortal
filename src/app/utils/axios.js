import axios from "axios";
import { baseurl } from "./variables";

const Axios=axios.create({baseURL:baseurl});
export default Axios;