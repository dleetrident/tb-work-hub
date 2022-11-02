import classes from "./Display.module.css";

const Display = (props) => {
  return (
    <section>
      <h1>{props.pageHeading}</h1>
      <div>{props.children}</div>
    </section>
  );
};

export default Display;
