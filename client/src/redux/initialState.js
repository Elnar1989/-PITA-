export const initialState = {
  users: [],
  posts: [],
  aprovedPost: [],
  tag: [],
  user: {
    id: localStorage.getItem("id"),
    name: localStorage.getItem("user"),
    admin: localStorage.getItem("admin"),
    moderate: localStorage.getItem("moderate"),
  },
  userFavouritePosts: [],
  loader: false,
  room: [],
  curUserPosts: [],
  static: []
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
