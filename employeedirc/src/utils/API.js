import axios from "axios";
const BASEURL = "https://randomapi.com/api/1234abcd?key=";
const APIKEY = "EV3I-1XIP-ZAWT-LM8M";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
