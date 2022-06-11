import { products, paging, product } from "./product.reducer";
import { categories } from "./category.reducer";
import search from "./search.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  search,
  categories,
  paging,
  product
});

export default rootReducer;
