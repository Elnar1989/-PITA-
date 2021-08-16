import {ADD_TAG, SHOW_TAG} from "../types/tagTypes"

import axios from "axios";

export function setAllTag(value) {
  return {
    type: SHOW_TAG,
    payload: value
  }
}

export function addTag(newTag) {
  return {
    type: ADD_TAG,
    payload: newTag
  }
}

export const getAllTag = () => async (dispatch) => {
  const tags = await axios("http://localhost:3001/tag");
  dispatch(setAllTag(tags.data));
};
