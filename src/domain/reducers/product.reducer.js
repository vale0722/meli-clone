import {
  searchProducts,
  searchProduct,
} from "../services/product.service";

const initialState = [];

export function queryProducts(search, category, paging, setIsLoading) {
  return async function action(dispatch) {
    let response = await searchProducts(search, category, paging, setIsLoading);
    dispatch({ type: "products/search", payload: response });
  };
}

export function getProduct(id, setIsLoading) {
  return async function action(dispatch) {
    let response = await searchProduct(id, setIsLoading);
    dispatch({ type: "products/show", payload: response });
  };
}

export function product(state = initialState, action) {
  switch (action.type) {
    case "products/show":
      return action.payload;
    default:
      return state;
  }
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
