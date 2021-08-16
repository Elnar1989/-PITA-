import Button from "../Button/Button";
import Input from "../Input/Input";
import form from "./form.module.css";

export default function Form({ move, title }) {
  return (
    <div className={form.wrapper}>
      <h2 className={form.title}>{title}</h2>
      <form className={form.form}>
        <Input />
        <Input />
        <Input />
        <Button text={move} />
      </form>
    </div>
  );
}
