import { SHOW_USER_POSTS } from "../types/postsCurrentUser";
import axios from "axios";

export function setAll(value) {
  return {
    type: SHOW_USER_POSTS,
    payload: value,
  };
}


export const getAllPostsCurUser = (id) => async (dispatch) => {
  const posts = await axios(`http://localhost:3001/currentuser/${id}`);
  dispatch(setAll(posts.data));
};
