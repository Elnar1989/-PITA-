import { ROOM_POSTS, ADD_TO_FAVOURITE, DELETE_FAVOURITE } from "../types/roomTypes"
export default function roomReducer(state = [], action) {



  const { type, payload } = action;
  switch (type) {
    case ROOM_POSTS:
      return payload;

      // case ADD_TO_FAVOURITE:
      //   return [...state, payload]

      //   case DELETE_FAVOURITE:
      //     return state.filter(el=> el.id !== payload)

    default:
      return state;
  }
}
