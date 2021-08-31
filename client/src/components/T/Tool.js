import Widgets from "../Others/Widgets/Widgets";
import tool from "./tool.module.css";
import { useEditContext } from "../../../src/contexts/PostContext";

export default function Tool() {
  const { widget, model } = useEditContext();
  
  return (
    <div className={tool.container} >
      {model}
      <div className={tool.chat}>
        <Widgets />
      </div>
      <div className={tool.wrapper}>
        {widget}
      </div>
    </div>
  );
}
