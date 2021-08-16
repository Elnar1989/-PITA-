import { SHOW_APROVED_POST } from "../types/aprovedPostReducer"
import axios from "axios";

export function setAll(value) {
  return {
    type: SHOW_APROVED_POST,
    payload: value,
  };
}


export const getAllAprovedPost = () => async (dispatch) => {
  const posts = await axios("http://localhost:3001/post");
  dispatch(setAll(posts.data));
};
