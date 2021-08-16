import { useState } from "react";
import { useEditContext } from "../../../contexts/PostContext";
import toggle from "./toggle.module.css";

export default function Toggle() {

  const { on, setOn } = useEditContext()

  function click(e) {
    if (on.left) {
      setOn({ right: "18px" })
    } else {
      setOn({ left: "18px" })
    }
  }


  return (
    <div className={toggle.body}>
      <div className={toggle.toggle}>
        <i className={toggle.indicator} onClick={(e) => click(e)} style={on} ></i>
      </div>
    </div>
  );
}
