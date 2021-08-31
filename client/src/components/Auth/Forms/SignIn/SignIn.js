import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signIn } from "../../../../redux/actions/userAC";
import LoginForm from "../../../Others/LoginForm/LoginForm";
import signup from "../SignUp/signup.module.css";

const SignIn = () => {
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, history, from));
    }
  };

  return (
    <div className={signup.container}>
      <div className={signup.wrapper}>
        <LoginForm
          userSign={userSignIn}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default SignIn;
