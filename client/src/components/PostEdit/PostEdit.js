import postEdit from "./postEdit.module.css";
import { useEditContext } from "../../../src/contexts/PostContext";
import Input from "../../components/Others/Input/Input";
// import Button from "../../components/Others/Button/Button";
import { removePost, changePost } from "../../redux/actions/postAC";
import { useDispatch } from "react-redux";


import Button from "../Others/Button copy/Button";
function PostEdit() {
  const { setEdit, edit, post, setPost, editTag, tag } = useEditContext();

  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(removePost(post.id));
    setEdit(!edit);
  };

  const hendlerSend = (e) => {
    e.preventDefault();
    dispatch(changePost(post.id, post.name, post.body, tag));

    setEdit(!edit);
  };

  const hendlerTitle = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const handletTag = (e) => {
    editTag(e.target.value);
  };

  const handlerBody = (e) => {
    setPost({ ...post, body: e.target.value });
  };
  return (
    <div className={postEdit.wrapper}>
      <form className={postEdit.form} onSubmit={hendlerSend}>
        <div className={postEdit.inputBox}>
          <Input
            lassName={postEdit.input}
            value={post.name}
            inputHandler={hendlerTitle}
          />
        </div>
        <div className={postEdit.areaBox}>
          <textarea
            className={postEdit.textArea}
            value={post.body}
            onChange={handlerBody}
          ></textarea>
        </div>
        <div className={postEdit.inputBox}>
          <Input
            className={postEdit.input}
            placeholder="Tags..."
            inputHandler={handletTag}
          />
        </div>
        <div className={postEdit.btns}>
          <Button
            handler={hendlerSend}
            color={"rgba(0, 210, 255, 0.7)"}
            className={postEdit.btn}
            text="Send"
          />
          <Button
            color={"rgba(255, 53, 155,  0.7)"}
            className={postEdit.btn}
            text="Delete"
            handler={handlerDelete}
          />
        </div>
      </form>
    </div>
  );
}

export default PostEdit;
