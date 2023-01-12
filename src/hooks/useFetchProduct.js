import { useFetch } from "./useFetch";
import { URL_BASE, URL_ENDPOINTS } from "../constants/services";

export const useFetchProduct = () => {
  const {
    data: dataProduct,
    error: errorProduct,
    loading: loadingProduct,
  } = useFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`);
  return dataProduct;
};
