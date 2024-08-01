import React, { useState, useRef } from "react";
import styles from "../styles/ToggleDialog.module.css";

export default function ToggleDialog({ children, name }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDialog = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleDialog} className={styles.nameButton}>
        {name}
      </button>
      {isVisible && (
        <div>
          <div
            className={styles.popup}
            style={{
              maxWidth: "auto",
              maxHeight: "auto",
              minWidth: "auto",
              minHeight: "auto",
            }}
          >
            <div className="dialog-content">
              <button className={styles.closeButton} onClick={toggleDialog}>
                x
              </button>
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { toggleDialog });
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
