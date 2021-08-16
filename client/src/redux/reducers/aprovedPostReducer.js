import {SHOW_APROVED_POST} from "../types/aprovedPostReducer"
export default function aprovedPostReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_APROVED_POST:
      return payload;


    default:
      return state;
  }
}
