import axios from "../../utils/axiosConfig";

export const fetchProductsAPI = async () => {
  const response = await axios.get("/products");
  //   const data = await response.json();
  return response.data;
};

export const postProductsAPI = async (productData) => {
  const response = await axios.post("/product", productData);
};
export const deleteProduct = async (id) => {
  const response = await axios.post(`/product/${id}`);
};
