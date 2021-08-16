
import input from './input.module.css';

export default function Input({ value, inputHandler, placeholder }) {

  return <input value={value} onChange={inputHandler} placeholder={placeholder} className={input.input}></input>
}
