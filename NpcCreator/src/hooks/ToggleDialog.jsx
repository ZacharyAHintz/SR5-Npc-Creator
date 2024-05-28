import React, { useState, useRef, Children } from "react";
import styles from "../styles/ToggleDialog.module.css";

export default function toggleDialog({ children }) {
  const targetRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleDialog = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggleDialog}>Character Name</button>
      {isVisible && (
        <div>
          <div
            ref={targetRef}
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
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
