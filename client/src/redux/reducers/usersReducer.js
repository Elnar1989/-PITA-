import { SHOW_USERS, DELETE_USERS, CHANGE_STATUS } from "../types/usersTypes";

export default function usersReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_USERS:
      return payload;

    case CHANGE_STATUS:
      return state.map((el) => {
        if (el.id === payload) {
          el.moderate = !el.moderate;
        }
        return el;
      });
    case DELETE_USERS:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
}
