import { useState } from "react";
import btn from "./btn.module.css";

export default function Button({ text, handler, color }) {
  const [btns, setBtns] = useState([text]);
    
  return (
    <>
      {btns.map((el) =>
        color ? (
          <button onClick={handler} className={btn.btn}>
            <span style={{background: color}}></span>
            <span style={{background: color}}></span>
            <span style={{background: color}}></span>
            <span style={{background: color}}></span>
            {el}
          </button>
        ) : (
          <button onClick={handler} className={btn.btn}>
            {el}
          </button>
        )
      )}
    </>
  );
}
