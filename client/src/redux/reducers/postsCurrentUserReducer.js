import { SHOW_USER_POSTS } from "../types/postsCurrentUser";

export default function postsCurrentUserReducer(state = [], action) {


  const { type, payload } = action;
  switch (type) {
    case SHOW_USER_POSTS:
      return payload;

    default:
      return state;
  }
}
