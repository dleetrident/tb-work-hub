import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h6 className={classes.cardheader}>{props.cardHeader}</h6>
      <div className={classes.cardcontent}>{props.children}</div>
    </div>
  );
};

export default Card;
