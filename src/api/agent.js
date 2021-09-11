import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const responseBody = res => res.data;
const request = {
  get: url => axios.get(url).then(responseBody),
};

const products = {
  list: () => request.get("/products"),
  getProduct: id => request.get(`/products/${id}`),
};

const categories = {
  getCategory: name => request.get(`/products/category/${name}`),
  getCategoryList: () => request.get("/products/categories"),
};

const agent = {
  products,
  categories,
};

export default agent;
