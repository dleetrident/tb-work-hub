import AuthContext from "./auth-context";
import { useReducer } from "react";

const defaultAuthState = {
  authState: false,
  userName: "",
};

const authReducer = (state, action) => {
  let updatedAuthState;
  if (action.type === "LOGIN") {
    updatedAuthState = true;
    return {
      authState: updatedAuthState,
      userName: action.userName,
    };
  }
  if (action.type === "LOGOUT") {
    updatedAuthState = false;
    return {
      authState: updatedAuthState,
      userName: "",
    };
  }

  return defaultAuthState;
};

const AuthProvider = (props) => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    defaultAuthState
  );
  const loginHandler = (userName) => {
    console.log(userName);
    dispatchAuthAction({ type: "LOGIN", userName: userName });
  };
  const logoutHandler = () => {
    dispatchAuthAction({ type: "LOGOUT" });
  };

  const authContext = {
    authState: authState.authState,
    userName: authState.userName,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
