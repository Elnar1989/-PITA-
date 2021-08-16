import { SHOW_TAG, ADD_TAG } from "../types/tagTypes";

export default function tagReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_TAG:
      return payload;
    case ADD_TAG:
      return [...state, ...payload];
    default:
      return state;
  }
}
