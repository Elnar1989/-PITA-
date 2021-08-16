import widgets from "./widgets.module.css"
import { useEditContext } from "../../../contexts/PostContext"
import Chat from "../Chat/Chat";
import Container from "../Container/Container";
import chat from "../../../icons/chat.png";
import list from "../../../icons/list.png";


export default function Widgets() {
  const { setWidget } = useEditContext();
  function changeButton(value) {
    setWidget(value);
  }
  return (
    <div className={widgets.container}>
      <div className={widgets.wrapper}>
        <div onClick={() => changeButton(<Chat />)} className={widgets.widgetBox}>
          <div className={widgets.imgBox}>
            <img alt="chat" src={chat}/>
          </div>
          <div className={widgets.textBox}>
            <p>Chat</p>
          </div>

        </div>
        <div onClick={() => changeButton(<Container move={['View']} title={'Posts List'} rooom={true} />)} className={widgets.widgetBox}>
          <div  className={widgets.imgBox}>
            <img alt="list" src={list}/>
          </div>
          <div className={widgets.textBox}>
            <p>Favorite posts</p>
          </div>

        </div>
        <div onClick={() => changeButton(<Container move={['Viеw']} title={'My posts'} myposts={true} />)} className={widgets.widgetBox}>
          <div  className={widgets.imgBox}>
            <img alt="list" src={list}/>
          </div>
          <div className={widgets.textBox}>
            <p>My posts</p>
          </div>

        </div>


      </div>
    </div>
  );
}
