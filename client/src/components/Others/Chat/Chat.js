import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button copy/Button";
import Input from "../Input/Input";
import chat from "./chat.module.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.user);

  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: "connection",
        username,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log("Socket закрыт");
    };
    socket.current.onerror = () => {
      console.log("Socket произошла ошибка");
    };
  }

  const sendMessage = async () => {
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };

  if (!connected) {
    return (
      <div className={chat.container}>
        <div className={chat.wrapper}>
          <div className={chat.form}>
            <div className={chat.inputBox}>
              <Input
                value={username}
                inputHandler={(e) => setUsername(e.target.value)}
                placeholder="Your name..."
              />
            </div>
            <div className={chat.btnBox}>
              <Button
                handler={connect}
                text={"Connect"}
                color={"rgba(0, 210, 255, 0.7)"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={chat.container}>
      <div className={chat.wrapper}>
        <ul className={chat.list}>
          {messages.map((mess) => (
            <div key={mess.id}>
              {mess.event === "connection" ? (
                <p className={chat.connection}>
                  Пользователь {mess.username} подключился
                </p>
              ) : (
                <p className={chat.message}>
                  {mess.username}: {mess.message}
                </p>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className={chat.form}>
        <div className={chat.inputBox}>
          <Input value={value} placeholder='Your message...' inputHandler={(e) => setValue(e.target.value)} />
        </div>
        <div className={chat.btnBox}>
          <Button
            handler={sendMessage}
            text={"Send"}
            color={"rgba(0, 210, 255, 0.7)"}
          />
        </div>
      </div>
    </div>
  );
}
