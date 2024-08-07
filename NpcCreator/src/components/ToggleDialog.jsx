import React, { useState, useRef, useCallback } from "react";
import styles from "../styles/ToggleDialog.module.css";
import getCharacterByID from "../helperFunctions/getCharacterByID";

let highestZIndex = 1;

export default function ToggleDialog({ children, name, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: "50%", height: "50%" });
  const [position, setPosition] = useState({ top: 250, left: 550 });
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [resizerDirection, setResizerDirection] = useState(null);
  const [zIndex, setZIndex] = useState(1);
  const dialogRef = useRef(null);
  const dragableRef = useRef(null);
  // const dragStart = useRef({ x: 0, y: 0, initialTop: 0, initialLeft: 0 });

  const character = getCharacterByID(id);

  const toggleDialog = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      bringToFront();
    }
  };

  const bringToFront = () => {
    highestZIndex += 1;
    setZIndex(highestZIndex);
  };

  const onMouseDown = (direction) => {
    setIsResizing(true);
    setResizerDirection(direction);
    document.body.style.userSelect = "none";
    bringToFront();
  };

  const onMouseDownDrag = (e) => {
    const rect = dialogRef.current.getBoundingClientRect();

    setStartY(e.pageY - rect.top);
    setStartX(e.pageX - rect.left);
    e.stopPropagation();
    e.preventDefault();

    setIsDragging(true);
    document.body.style.userSelect = "none";
    bringToFront();
  };

  const onMouseMove = useCallback(
    (e) => {
      if (isResizing) {
        const { clientX, clientY } = e;
        const rect = dialogRef.current.getBoundingClientRect();

        if (resizerDirection.includes("R")) {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(clientX - rect.left, 100),
          }));
        }
        if (resizerDirection.includes("B")) {
          setDimensions((prev) => ({
            ...prev,
            height: Math.max(clientY - rect.top, 100),
          }));
        }
        if (resizerDirection.includes("L")) {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(rect.right - clientX, 100),
            left: clientX,
          }));
        }
        if (resizerDirection.includes("T")) {
          setDimensions((prev) => ({
            ...prev,
            height: Math.max(rect.bottom - clientY, 100),
            top: clientY,
          }));
        }
        if (resizerDirection === "TL") {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(rect.right - clientX, 100),
            height: Math.max(rect.bottom - clientY, 100),
          }));
        }
        if (resizerDirection === "TR") {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(clientX - rect.left, 100),
            height: Math.max(rect.bottom - clientY, 100),
          }));
        }
        if (resizerDirection === "BL") {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(rect.right - clientX, 100),
            height: Math.max(clientY - rect.top, 100),
          }));
        }
        if (resizerDirection === "BR") {
          setDimensions((prev) => ({
            ...prev,
            width: Math.max(clientX - rect.left, 100),
            height: Math.max(clientY - rect.top, 100),
          }));
        }
      } else if (isDragging) {
        const rect = dialogRef.current.getBoundingClientRect();
        const newTop = e.pageY;
        const newLeft = e.pageX;
        setPosition({
          top: `${newTop}`,
          left: `${newLeft}`,
        });
        e.stopPropagation();
        e.preventDefault();
      }
    },
    [isResizing, resizerDirection, isDragging],
  );

  const onMouseUp = () => {
    setIsResizing(false);
    setResizerDirection(null);
    setIsDragging(false);
    document.body.style.userSelect = "";
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
          style={{
            width: dimensions.width,
            height: dimensions.height,
            top: position.top + "px",
            left: position.left + "px",
            zIndex: zIndex,
            position: "absolute",
          }}
          onMouseDown={bringToFront}
        >
          <div className={styles.header} onMouseDown={onMouseDownDrag}>
            {/* <span className={styles.dialogName}>
              {name} - Rating {character.rating} {character.archetype}
            </span>{" "} */}
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
