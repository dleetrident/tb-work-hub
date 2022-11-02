import { useRef, useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import classes from "./Login.module.css";
import button from "../Assets/Login_button.png";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value.length < 5 ||
      passwordRef.current.value.length < 5
    ) {
      setFormIsInvalid(true);
      return;
    } else {
      console.log(authCtx.authState);
      authCtx.login(userNameRef.current.value);
    }
  };

  return (
    <div className={classes.container}>
      <h1>Dev Challenge</h1>
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label" htmlFor="name">
            {authCtx.userName}
          </label>
          <input
            className="input is-primary"
            type="text"
            id="username"
            maxLength="40"
            minLength="6"
            ref={userNameRef}
            placeholder="Username"></input>
        </div>
        <div className="field">
          <label className="label" htmlFor="name"></label>
          <input
            className="input is-primary"
            type="text"
            id="password"
            maxLength="40"
            minLength="6"
            ref={passwordRef}
            placeholder="Password"></input>
        </div>

        <input
          className={classes.button}
          type="image"
          id="myimage"
          src={button}
          alt="Login Button"
        />
        <br />
        {formIsInvalid ? (
          <p className={classes["form-error"]}>
            Please complete input of all required fields. Both Username and
            Passwords require a minimum length of 5.
          </p>
        ) : (
          <br />
        )}
      </form>
    </div>
  );
};

export default Login;
