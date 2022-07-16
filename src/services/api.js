import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

const getData = async (name) => {
  const response = await axios.get(`${BASE_URL}/${name}`);
  return response.data;
};

export { getData };
