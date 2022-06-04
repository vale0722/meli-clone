import {
  getCategories,
} from "../services/category.service";

const initialState = [];

export function queryCategories(setIsLoading) {
  return async function action(dispatch) {
    let response = await getCategories(setIsLoading);
    dispatch({ type: "categories/search", payload: response });
  };
}

export function categories(state = initialState, action) {
  switch (action.type) {
    case "categories/search":
      return action.payload;
    default:
      return state;
  }
}
