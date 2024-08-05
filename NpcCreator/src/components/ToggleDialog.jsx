import React, { useState, useRef, useCallback } from "react";
import styles from "../styles/ToggleDialog.module.css";

export default function ToggleDialog({ children, name }) {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: "50%", height: "50%" });
  const [isResizing, setIsResizing] = useState(false);
  const [resizerDirection, setResizerDirection] = useState(null);
  const dialogRef = useRef(null);

  const toggleDialog = () => {
    setIsVisible(!isVisible);
  };

  const onMouseDown = (direction) => {
    setIsResizing(true);
    setResizerDirection(direction);
  };

  const onMouseMove = useCallback(
    (e) => {
      if (!isResizing) return;

      const { clientX, clientY } = e;
      const { left, top, right, bottom } =
        dialogRef.current.getBoundingClientRect();

      if (resizerDirection.includes("R")) {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(clientX - left, 100),
        }));
      }
      if (resizerDirection.includes("B")) {
        setDimensions((prev) => ({
          ...prev,
          height: Math.max(clientY - top, 100),
        }));
      }
      if (resizerDirection.includes("L")) {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(right - clientX, 100),
          left: clientX,
        }));
      }
      if (resizerDirection.includes("T")) {
        setDimensions((prev) => ({
          ...prev,
          height: Math.max(bottom - clientY, 100),
          top: clientY,
        }));
      }
      if (resizerDirection === "TL") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(right - clientX, 100),
          height: Math.max(bottom - clientY, 100),
        }));
      }
      if (resizerDirection === "TR") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(clientX - left, 100),
          height: Math.max(bottom - clientY, 100),
        }));
      }
      if (resizerDirection === "BL") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(right - clientX, 100),
          height: Math.max(clientY - top, 100),
        }));
      }
      if (resizerDirection === "BR") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(clientX - left, 100),
          height: Math.max(clientY - top, 100),
        }));
      }
    },
    [isResizing, resizerDirection],
  );

  const onMouseUp = () => {
    setIsResizing(false);
    setResizerDirection(null);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove]);

  return (
    <div>
      <button onClick={toggleDialog} className={styles.nameButton}>
        {name}
      </button>
      {isVisible && (
        <div
          ref={dialogRef}
          className={styles.popup}
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <div className={styles.header}>
            <button className={styles.closeButton} onClick={toggleDialog}>
              x
            </button>
          </div>
          <div className={styles.content}>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { toggleDialog });
            })}
          </div>
          <div className={styles.footer}></div>
          <div
            className={`${styles.resizer} ${styles.resizerL}`}
            onMouseDown={() => onMouseDown("L")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerR}`}
            onMouseDown={() => onMouseDown("R")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerT}`}
            onMouseDown={() => onMouseDown("T")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerB}`}
            onMouseDown={() => onMouseDown("B")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerTL}`}
            onMouseDown={() => onMouseDown("TL")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerTR}`}
            onMouseDown={() => onMouseDown("TR")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerBL}`}
            onMouseDown={() => onMouseDown("BL")}
          ></div>
          <div
            className={`${styles.resizer} ${styles.resizerBR}`}
            onMouseDown={() => onMouseDown("BR")}
          ></div>
        </div>
      )}
    </div>
  );
}
