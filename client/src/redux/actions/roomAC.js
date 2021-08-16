import { ROOM_POSTS, ADD_TO_FAVOURITE, DELETE_FAVOURITE } from "../types/roomTypes"

import axios from "axios";

export function setAll(value) {
  return {
    type: ROOM_POSTS,
    payload: value,
  };
}

// export function deleteFavourite(id) {
//   return {
//     type: DELETE_FAVOURITE,
//     payload: id
//   }
// }

// export function addFavourite(id) {
//   return {
//     type: ADD_TO_FAVOURITE,
//     payload: id
//   }
// }

export const getRoomsPosts = (id) => async (dispatch) => {
  const posts = await axios(`http://localhost:3001/tools/${id}`);
  dispatch(setAll(posts.data));
};

export const addToFavourite = (idUser, idPost) => async () => {
  await axios.patch("http://localhost:3001/tools", { idUser, idPost });
};

export const deleteToFavourite = (idUser, idPost) => async () => {
  await axios.delete("http://localhost:3001/tools", {
    data: { idUser, idPost },
  });
};


