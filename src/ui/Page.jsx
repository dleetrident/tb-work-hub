import { useNavigate } from "react-router";
import classes from "./Page.module.css";

const Page = (props) => {
  const navigate = useNavigate();
  const backHandler = (e) => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <button onClick={backHandler} className={classes.backbutton}>
        &#8617; Back to Dashboard
      </button>
      <h1>{props.heading}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default Page;
