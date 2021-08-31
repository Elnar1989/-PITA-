import Item from "../Item/Item";
import container from "./container.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getAllPost } from "../../../redux/actions/postAC";
import { useEditContext } from "../../../contexts/PostContext";
import {
  changeStatusThunk,
  deleteUserThunk,
  getAllUsers,
} from "../../../redux/actions/usersAC";
import { getAllPostsCurUser } from "../../../redux/actions/postsCurrentUserAC";
import { getRoomsPosts } from "../../../redux/actions/roomAC";


export default function Container({
  title,
  move,
  poster,
  userer,
  rooom,
  myposts,
}) {
  const { setEdit, edit, setPost } = useEditContext();
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);
  const curUserPosts = useSelector((state) => state.curUserPosts);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const handlerEdit = (el) => {
    setEdit(!edit);
    setPost(el);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const handlerStatus = (id) => {
    dispatch(changeStatusThunk(id));
  };

  const handlerDelete = (id) => {
    dispatch(deleteUserThunk(id));
  };

  useEffect(() => {
    if (user) dispatch(getRoomsPosts(user.id));
  }, []);

  useEffect(() => {
    if (user) dispatch(getAllPostsCurUser(user.id));
  }, []);

  return (
    <div className={container.container}>
      <div className={container.title}>
        <h2>{title}</h2>
      </div>
      <div className={container.wrapper}>
        <div className={container.lists}>
          {poster &&
            posts.map((el) => (
              <Item
                key={el.id}
                handlerEdit={() => handlerEdit(el)}
                move={move}
                text={el.name}
              />
            ))}
          {userer &&
            users.map((el) => (
              <Item
                key={el.id}
                handlerEdit={() => handlerStatus(el.id)}
                handlerDelete={() => handlerDelete(el.id)}
                move={move}
                text={`${el.name} status: ${el.moderate ? "moder" : "user"}`}
              />
            ))}

          {rooom &&
            room.map((el) => (
              <Item key={el.id} id={el.id} move={move} text={el.name} />
            ))}

          {myposts &&
            curUserPosts.map((el) => (
              <Item key={el.id} id={el.id} move={move} text={el.name} />
            ))}
        </div>
      </div>
    </div>
  );
}
