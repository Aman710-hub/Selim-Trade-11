import React from "react";
import styles from "./Button.module.scss";
import { useSelector } from "react-redux";

const Button = ({ text, outline, icon, handleclick }) => {
  const { isLoading } = useSelector((store) => store.news);
  return (
    <button
      onClick={handleclick}
      className={styles.btn}
      style={{ outline: outline }}
    >
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {text} <span className={styles.icon}>{icon}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
