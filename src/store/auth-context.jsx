import React from "react";

const AuthContext = React.createContext({
  authState: false,
  userName: "",
});

export default AuthContext;
