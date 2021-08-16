import insp from "./inspiration.module.css";
import TreeApp from "../tree/tree";
import Modal from "../Others/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllAprovedPost } from "../../redux/actions/aprovedPostAC";

export default function Inspiration() {
  const posts = useSelector((state) => state.aprovedPost);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAprovedPost());
  }, []);


  const [model, setModel] = useState('')


  function modal(e) {
    if (e.target.getAttribute('data-tree') && posts.find(el => el.name === e.target.getAttribute('data-tree'))) {

      const currPost = posts.find(el => el.name === e.target.getAttribute('data-tree'))
      const name = currPost.name
      const body = currPost.body
      const id = currPost.id
      setModel(<Modal key={id} name={name} body={body} setModel={setModel} id={id} show={true} />)
      // <Modal { title: name, body:body }/>
    }
  }

  return (
    <div className={insp.container}>
      {model}
      <div onClick={(e) => modal(e)} className={insp.wrapper}>
        <TreeApp style={{ zIndex: 999 }} />
      </div>
    </div>
  );
}
