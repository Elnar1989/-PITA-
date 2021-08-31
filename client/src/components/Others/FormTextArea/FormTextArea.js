import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPain } from "../../../redux/actions/postAC";
import Button from "../Button copy/Button";
import form from "./textArea.module.css";

export default function FormTextArea({ move, title, handlerSend }) {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  let inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const [textArea, setTextArea] = useState("");
  const textAreaHandler = (event) => {
    setTextArea(event.target.value);
  };

  const showInputHandler = (e) => {
    e.preventDefault();
    dispatch(addPain({ input: inputText, textArea: textArea, aproved: false }));
    setInputText("");
    setTextArea("");
    handlerSend();
  };

  return (
    <div className={form.wrapper}>
      <div className={form.form}>
        <h2 className={form.title}>{title}</h2>

        <form onSubmit={(e) => showInputHandler(e)}>
          <div className={form.inputBox}>
            <input
              placeholder="Your title..."
              onChange={(e) => inputHandler(e)}
              className={form.input}
              value={inputText}
            />
          </div>
          <div className={form.areaBox}>
            <textarea
              placeholder="Text..."
              className={form.textArea}
              value={textArea}
              onChange={textAreaHandler}
            ></textarea>
          </div>
          <div className={form.inputBox}>
            <Button
              text={move}
              color={"rgba(0, 210, 255, 0.4)"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
