import { useEffect, useState } from "react";
import FormTextArea from "../Others/FormTextArea/FormTextArea";
import pain from "./pain.module.css";
import loader from '../../icons/Cube-1.1s-347px.svg';

export default function Pain() {
  const [send, setSend] = useState(false);

  const handlerSend = () => {
    setSend(!send);
  };

  useEffect(() => {
    if (send) {
      setTimeout(() => {
        setSend(!send);
      }, 2000);
    }
  }, [send]);

  return (
    <div className={pain.container}>
      {send ? (
        <div className={pain.wrapper}>
          <div className={pain.text} >
            <p>Спасибо! Теперь наш модератор займется делом</p>
          </div>
        </div>
      ) : (
        <FormTextArea
          move={["Send"]}
          handlerSend={handlerSend}
          title={"Write your pain"}
        />
      )}
    </div>
  );
}
