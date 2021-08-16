import { useState } from "react";
import btn from "./btn.module.css";

export default function Button({ text, handler }) {
  const [btns, setBtns] = useState([text]);

  return (
    <>
      {btns.map((el) => (
        <button onClick={handler} className={btn.btn}>
          <p className={btn.text}>{el}</p>
        </button>
      ))}
    </>
  );
}
