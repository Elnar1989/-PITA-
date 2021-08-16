// import WebSock from "../chat/chat";

import Chat from "../Others/Chat/Chat";
import Container from "../Others/Container/Container";
import Widgets from "../Others/Widgets/Widgets";
import tool from "./tool.module.css";
import { useEditContext } from "../../../src/contexts/PostContext";

export default function Tool() {
  const { widget, model } = useEditContext();


 

  return (
    <div className={tool.container} >
      {model}
      <div className={tool.chat}>
        {/* <Chat /> */}
        <Widgets />
      </div>
      <div className={tool.wrapper}>
        {widget}
        {/* <Container move={['View']} title={'Posts List'} rooom={true} /> */}
      </div>
    </div>
  );
}
