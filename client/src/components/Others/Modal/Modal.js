import { useState } from "react";
import modal from "./modal.module.css";
import heart from "../../../icons/icon-2445095_640.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  deleteToFavourite,
} from "../../../redux/actions/roomAC";

export default function Modal({ name, tag, setModel, body, id, showHeart = true }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const [showModal, setShowModal] = useState(true);

  const [hearts, setHearts] = useState({});


  const closeModal = () => {
    setTimeout(() => {
      setShowModal(false);
      setModel(false);
    }, 500);
  };

  const handlerFavourite = (id) => {
    if (!hearts.filter) {
      setHearts({ filter: "invert(1)" });
      dispatch(addToFavourite(user.id, id));
    } else {
      setHearts({});
      dispatch(deleteToFavourite(user.id, id));
    }
  };

  return (
    <>
      {showModal && (
        <div className={modal.container}>
          <div className={modal.wrapper}>
            <div className={modal.modal}>
              <div className={modal.title}>
                <h2>{name}</h2>
                {showHeart && <span>
                  <img
                    className={modal.like}
                    src={heart}
                    alt="heart"
                    onClick={() => handlerFavourite(id)}
                    style={hearts}
                  />
                </span>}
              </div>
              <div className={modal.body}>
                <p className={modal.text}>{body}</p>
                <p className={modal.tag}>{tag}</p>
              </div>
            </div>
            <div onClick={closeModal} className={modal.closeWrapper}>
              <span className={modal.close}></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

