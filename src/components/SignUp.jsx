import { useRef, useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import button from "../Assets/Register_button.png";
import { auth } from "../firebase";

const SignUp = () => {
  const authCtx = useContext(AuthContext);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { userName } = authCtx;
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value.length < 5 ||
      passwordRef.current.value.length < 5
    ) {
      return setError(
        " Please complete input of all required fields. Both Username and Passwords require a minimum length of 5."
      );
    } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);

      //     await authCtx.signUp(emailRef.current.value, passwordRef.current.value).then(() => {

      //   })
      await auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then(() => {
          let firebaseUser = auth.currentUser;
          firebaseUser.updateProfile({
            displayName: userNameRef.current.value,
          });
          authCtx.login(userNameRef.current.value);
        });

      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    const user = authCtx.userName;
    setLoading(false);
    setFormIsValid(true);
  };

  return (
    <div className={classes.container}>
      <h1>Dev Challenge</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.gridcontainer}>
          {" "}
          <div className="field">
            <label className="label" htmlFor="name"></label>
            <input
              className={classes.textinput}
              type="text"
              id="username"
              maxLength="40"
              minLength="6"
              ref={userNameRef}
              placeholder="Username"></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="email"></label>
            <input
              className={classes.textinput}
              type="email"
              id="email"
              maxLength="40"
              minLength="6"
              ref={emailRef}
              placeholder="Email"></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="name"></label>
            <input
              className={classes.textinput}
              type="text"
              id="password"
              maxLength="40"
              minLength="6"
              ref={passwordRef}
              placeholder="Password"></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="name"></label>
            <input
              className={classes.textinput}
              type="text"
              id="password"
              maxLength="40"
              minLength="6"
              ref={passwordConfirmRef}
              placeholder="Password"></input>
          </div>
        </div>

        <input
          className={classes.button}
          type="image"
          onClick={submitHandler}
          id="myimage"
          src={button}
          alt="Sign Up Button"
        />

        <br />
        {!formIsValid ? (
          <p className={classes["form-error"]}>{error}</p>
        ) : (
          <br />
        )}
      </form>
    </div>
  );
};

export default SignUp;
