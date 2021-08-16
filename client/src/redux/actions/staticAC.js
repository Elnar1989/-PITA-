import { SHOW_STATIC } from "../types/staticType";
import axios from "axios";

export function setStatic(value) {
  return {
    type: SHOW_STATIC,
    payload: value,
  };
}



export const getStatic = () => async (dispatch) => {
  const statics = await axios("http://localhost:3001/admin/static");
  dispatch(setStatic(statics.data));
};
