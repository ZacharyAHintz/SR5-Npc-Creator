import React, { useState, useRef } from "react";
import styles from "../styles/NewCharacterToggleDialog.module.css";

export default function NewCharacterToggleDialog({ children, name }) {
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef(null);

  const toggleDialog = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleDialog} className={styles.nameButton}>
        {name}
      </button>
      {isVisible && (
        <div ref={dialogRef} className={styles.popup}>
          <button className={styles.closeButton} onClick={toggleDialog}>
            x
          </button>

          <div className={styles.content}>{children}</div>
        </div>
      )}
    </div>
  );
}
