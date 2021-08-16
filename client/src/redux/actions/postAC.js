import {
  EDIT_POST,
  DELETE_POST,
  SHOW_POST,
  ADD_POST,
} from "../types/postTypes";
import { addTag } from "./tagAC";

import axios from "axios";

export function setAll(value) {
  return {
    type: SHOW_POST,
    payload: value,
  };
}

export function addPostNotApproved(newPost) {
  return {
    type: ADD_POST,
    payload: newPost,
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function editPost(id) {
  return {
    type: EDIT_POST,
    payload: id,
  };
}



export const addPain = (data) => async (dispatch) => {
  const addPain = await axios.post(
    "http://localhost:3001/post",
    { data },
    { withCredentials: true }
  );
  if (addPain.status === 200) {
    dispatch(addPostNotApproved(addPain.data));
  } else {
    console.log("addOneTodoAction err saving new todo to db");
  }
};

export const getAllPost = () => async (dispatch) => {
  const posts = await axios("http://localhost:3001/moderator");
  dispatch(setAll(posts.data));
};

export const removePost = (id) => async (dispatch) => {
  await axios.delete(
    "http://localhost:3001/moderator",
    { data: { id } },
    { withCredentials: true }
  );
  dispatch(deletePost(id));
};

export const changePost = (id, title, body, tag) => async (dispatch) => {
  await axios
    .patch("http://localhost:3001/moderator", { id, title, body, tag })
    .then((res) => {
      // dispatch(editPost(res.data));
      dispatch(addTag(res.data));
    });
  dispatch(editPost(id));
};
