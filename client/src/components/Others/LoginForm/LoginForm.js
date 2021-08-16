import Button from "../Button copy/Button";
import loginForm from "./loginForm.module.css";

export default function LoginForm({
  signup,
  userSign,
  changeHandler,
  submitHandler,
}) {
  return (
    <div className={loginForm.box}>
      <div className={loginForm.square} style={{ animationDelay: "0s" }}></div>
      <div className={loginForm.square} style={{ animationDelay: "-1s" }}></div>
      <div className={loginForm.square} style={{ animationDelay: "-2s" }}></div>
      <div className={loginForm.square} style={{ animationDelay: "-3s" }}></div>
      <div className={loginForm.square} style={{ animationDelay: "-4s" }}></div>
      <div className={loginForm.container}>
        <div className={loginForm.form}>
          {signup ? (
            <h2 className={loginForm.title}>SignUp</h2>
          ) : (
            <h2 className={loginForm.title}>Log In</h2>
          )}

          <form onSubmit={submitHandler}>
            <div className={loginForm.inputBox}>
              <input
                onChange={changeHandler}
                className={loginForm.input}
                placeholder="Name"
                name="name"
                value={userSign.name}
              />
            </div>
            {signup && (
              <div className={loginForm.inputBox}>
                <input
                  onChange={changeHandler}
                  className={loginForm.input}
                  placeholder="Email"
                  name="email"
                  value={userSign.email}
                />
              </div>
            )}
            <div className={loginForm.inputBox}>
              <input
                onChange={changeHandler}
                className={loginForm.input}
                type="password"
                placeholder="Password"
                name="password"
                value={userSign.password}
              />
            </div>
            <div className={loginForm.inputBox}>
              {signup ? (
                <Button type="submit" className={loginForm.input} text="Sign up" />
              ) : (
                <Button type="submit" className={loginForm.input} text="Log in" />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
