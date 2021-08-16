import { SHOW_STATIC } from "../types/staticType";

export default function staticReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {

    case SHOW_STATIC:
      return payload;

    default:
      return state;
  }
}
