import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import tagReducer from "./tagReducer";
import loaderReducer from "./loaderReducer";
import usersReducer from "./usersReducer";
import postsCurrentUserReducer from "./postsCurrentUserReducer";
import aprovedPostReducer from "./aprovedPostReducer"
import roomReducer from "./roomReducer"
import staticReducer from "./staticReducer"
const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  aprovedPost: aprovedPostReducer,
  tag: tagReducer,
  loader: loaderReducer,
  users: usersReducer,
  room: roomReducer,
  curUserPosts: postsCurrentUserReducer,
  static: staticReducer
});

export default rootReducer;
