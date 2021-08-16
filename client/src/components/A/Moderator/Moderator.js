import Container from "../../Others/Container/Container";
import moderator from "./moderator.module.css";
import { useEditContext } from "../../../contexts/PostContext";
import PostEdit from "../../PostEdit/PostEdit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStatic } from "../../../redux/actions/staticAC";

export default function Moderator() {
  const { edit } = useEditContext();
  const dispatch = useDispatch();
  const statics = useSelector((state) => state.static);

  useEffect(() => {
    dispatch(getStatic());
  }, [statics]);

  return (
    <div className={moderator.container}>
      <div className={moderator.wrapper}>
        <Container move={["Edit"]} title={"Posts List"} poster={true} />
      </div>

      <div className={moderator.stata}>
        <div className={moderator.stataContainer}>
          {edit ? (
            <div className={moderator.title}>
              Всего постов: {statics?.findAll?.count}
              <br />
              Одобренно: {statics?.findAllAproved?.count}
              <br />
              На рассмотрении: {statics?.findAllNotAproved?.count}
            </div>
          ) : (
            <PostEdit />
          )}
        </div>
      </div>
    </div>
  );
}
