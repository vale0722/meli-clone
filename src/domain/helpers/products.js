import { store } from "./store";
import { queryProducts } from "../reducers/product.reducer";
import { searchState } from "../reducers/search.reducer";

const fetchProducts = async (value, category, setIsLoading, paginate) =>
  await store.dispatch(queryProducts(value, category, paginate, setIsLoading));
const search = async (value) => await store.dispatch(searchState(value));

export const searchProducts = async (
  navigate,
  key,
  category,
  setIsLoading,
  paginate = []
) => {
  search(key).then(async () => {
    await fetchProducts(key, category, setIsLoading, paginate);
    navigate(`/resultados/buscar`);
  });
};

export const searchProductsByCategory = async (
  navigate,
  category,
  setIsLoading,
  paginate = []
) => {
  await fetchProducts('', category.id, setIsLoading, paginate);
  navigate(`/resultados/categorias/${category.id}`);
};
