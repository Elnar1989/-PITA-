import { SHOW_USERS, DELETE_USERS, CHANGE_STATUS, SHOW_STATIC } from "../types/usersTypes";

import axios from "axios";

export function setAllUsers(value) {
  return {
    type: SHOW_USERS,
    payload: value,
  };
}

export function changeStatus(id) {
  return {
    type: CHANGE_STATUS,
    payload: id,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USERS,
    payload: id,
  };
}


export const getAllUsers = () => async (dispatch) => {
  const users = await axios("http://localhost:3001/admin");
  dispatch(setAllUsers(users.data));
};

export const changeStatusThunk = (id) => async (dispatch) => {
  await axios.patch("http://localhost:3001/admin", { id });
  dispatch(changeStatus(id));
};

export const deleteUserThunk = (id) => async (dispatch) => {
  await axios.delete("http://localhost:3001/admin", { data: { id } });
  dispatch(deleteUser(id));
};


