import { useEditContext } from "../../../contexts/PostContext";
import Button from "../Button copy/Button";
import item from "./item.module.css";

export default function Item({
  move,
  text,
  handlerSend,
  handlerEdit,
  handlerDelete,
  handler,
  id,
}) {
  const { handlerView, handlerView2 } = useEditContext();

  return (
    <div className={item.wrapper}>
      <div data-item={id} className={item.texts}>
        <p className={item.text}>{text}</p>
      </div>
      <div className={item.btns}>
        {move.map((el) => {
          switch (el) {
            case "Send":
              return (
                <Button
                  handler={handlerSend}
                  className={item.btn}
                  text={el}
                  color={"rgba(0, 210, 255, 0.7)"}
                />
              );

            case "Edit":
              return (
                <Button
                  handler={handlerEdit}
                  className={item.btn}
                  text={el}
                  color={"rgba(255, 253, 135,  0.7)"}
                />
              );

            case "Delete":
              return (
                <Button
                  handler={handlerDelete}
                  className={item.btn}
                  text={el}
                  color={"rgba(255, 53, 155,  0.7)"}
                />
              );

            case "View":
              return (
                <Button
                  handler={() => handlerView(id)}
                  className={item.btn}
                  text={el}
                />
              );
            case "Viеw":
              return (
                <Button
                  handler={() => handlerView2(id)}
                  className={item.btn}
                  text={el}
                />
              );
            default:
              return (
                <Button handler={handler} className={item.btn} text={el} />
              );
          }
        })}
      </div>
    </div>
  );
}
