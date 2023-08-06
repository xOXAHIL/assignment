import styles from "./Card.module.css";

const Card = ({ cardData, title, keysToShow }) => {
  const keysToDisplay = Object.keys(cardData).slice(0, keysToShow);
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {keysToDisplay.map((key) => (
        <div className={styles.cell} key={key}>
          <div className={styles.value}>{key}</div>
          <div className={styles.value}>{cardData[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
