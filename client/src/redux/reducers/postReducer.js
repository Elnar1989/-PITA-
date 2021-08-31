import {
  EDIT_POST,
  DELETE_POST,
  SHOW_POST,
  ADD_POST,
} from "../types/postTypes";

export default function postReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_POST:
      return payload;

    case DELETE_POST:
      return state.filter((el) => el.id !== payload);

    case ADD_POST:
      return [...state, payload];

      case EDIT_POST:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
}
