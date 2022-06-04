import { products, paging } from "./product.reducer";
import { categories } from "./category.reducer";
import search from "./search.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  search,
  categories,
  paging,
});

export default rootReducer;
