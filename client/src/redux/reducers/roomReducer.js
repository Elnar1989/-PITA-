import { ROOM_POSTS } from "../types/roomTypes"
export default function roomReducer(state = [], action) {



  const { type, payload } = action;
  switch (type) {
    case ROOM_POSTS:
      return payload;

    default:
      return state;
  }
}
