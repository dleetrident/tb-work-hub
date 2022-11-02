import classes from "./Title.module.css";

const Title = (props) => {
  return <h1 className={classes.title}>{props.title}</h1>;
};
