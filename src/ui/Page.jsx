import classes from "./Page.module.css";

const Page = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.heading}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default Page;
