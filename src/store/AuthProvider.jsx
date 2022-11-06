import AuthContext from "./auth-context";
import { useReducer, useState } from "react";
import { auth } from "../firebase";
import { useEffect } from "react";

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
  if (action.type === "USER") {
    return {
      authState: true,
      userName: action.user,
    };
  }

  return defaultAuthState;
};

const AuthProvider = (props) => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    defaultAuthState
  );
  const [loading, setLoading] = useState(true);
  const loginHandler = (userName) => {
    dispatchAuthAction({ type: "LOGIN", userName: userName });

    console.log(auth.currentUser.displayName);
  };

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        dispatchAuthAction({ type: "USER", user: user.displayName });
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const authContext = {
    authState: authState.authState,
    userName: authState.userName,
    login: loginHandler,
    signUp: signUp,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
