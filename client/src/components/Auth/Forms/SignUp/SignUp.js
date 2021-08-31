import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signUp } from "../../../../redux/actions/userAC";
import LoginForm from "../../../Others/LoginForm/LoginForm";
import signup from "./signup.module.css";

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    name: "",
    password: "",
  });

  let history = useHistory();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    
    if (payload.length) {
      payload = Object.fromEntries(payload);
    
      dispatch(signUp(payload, history));
    }
  };

  return (
    <div className={signup.container}>
      <div className={signup.wrapper}>
        <LoginForm
          signup={true}
          userSign={userSignUp}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default SignUp;
