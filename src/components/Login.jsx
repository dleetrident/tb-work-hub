import { useRef, useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import button from "../Assets/Login_button.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      emailRef.current.value.length < 5 ||
      passwordRef.current.value.length < 5
    ) {
      setFormIsInvalid(true);
      return;
    } else {
      try {
        await auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then(() => {
            authCtx.login(auth.currentUser.displayName);
          });
        setTimeout(() => {
          !error && navigate("/");
        }, 500);
      } catch {
        return setError("failed to login");
      }
    }
  };

  return (
    <div className={classes.container}>
      <h1>Dev Challenge</h1>
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label" htmlFor="email"></label>
          <input
            className="input is-primary"
            type="text"
            id="email"
            maxLength="40"
            minLength="6"
            ref={emailRef}
            placeholder="Email"></input>
        </div>
        <div className="field">
          <label className="label" htmlFor="password"></label>
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
          onClick={submitHandler}
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
        {error}
      </form>
      <div>
        {" "}
        New to the Hackathon?<Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
