import {
  searchProducts,
} from "../services/product.service";

const initialState = [];

export function queryProducts(search, paging, setIsLoading) {
  return async function action(dispatch) {
    let response = await searchProducts(search, paging, setIsLoading);
    dispatch({ type: "products/search", payload: response });
  };
}

export function products(state = initialState, action) {
  switch (action.type) {
    case "products/search":
      return action.payload.results;
    default:
      return state;
  }
}

export function paging(state = initialState, action) {
  switch (action.type) {
    case "products/search":
      return action.payload.paging;
    default:
      return state;
  }
}
