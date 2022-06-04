const initialState = "";

export function searchState(search) {
  return async function action(dispatch) {
    dispatch({ type: "search", payload: search });
  };
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case "search": {
      return action.payload;
    }
    default:
      return state;
  }
}
