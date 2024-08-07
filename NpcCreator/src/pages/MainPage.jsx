import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/MainPage.module.css";
import GetCharacters from "../components/GetCharacters";

export default function MainPage() {
  const [characters, setCharacters] = useState([]);
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab"));

  useEffect(() => {
    const updateCharactersFromLocalStorage = () => {
      const storedCharacters = JSON.parse(localStorage.getItem("characters"));
      if (storedCharacters) {
        setCharacters(storedCharacters);
      } else {
        setCharacters([]);
      }
    };

    updateCharactersFromLocalStorage();

    const handleStorageChange = () => {
      updateCharactersFromLocalStorage();
      setActiveTab(localStorage.getItem("activeTab"));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("charactersUpdated", handleStorageChange);
    window.addEventListener("characterAdded", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("charactersUpdated", handleStorageChange);
      window.removeEventListener("characterAdded", handleStorageChange);
    };
  }, []);

  const calculateHealthBoxes = (bodyStats) => {
    return Math.floor(bodyStats / 2) + 8;
  };

  const calculateWillpowerBoxes = (willpowerStats) => {
    return Math.floor(willpowerStats / 2) + 8;
  };

  const handleCheckboxChange = (charId, index, type) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.map((char) => {
        if (char.id === charId) {
          const numBoxes =
            type === "health"
              ? calculateHealthBoxes(char.stats.body.baseStats)
              : calculateWillpowerBoxes(char.stats.willpower.baseStats);

          const currentState =
            char[`${type}BoxesState`] || Array(numBoxes).fill(false);

          let newCheckedState = Array(numBoxes).fill(false);

          // Check if the clicked box is the first one
          const isFirstBox = index === 0;
          const firstBoxIsChecked = currentState[0];
          const isOnlyChecked = currentState.every(
            (checked, idx) => idx === index || !checked,
          );

          if (isFirstBox && isOnlyChecked && firstBoxIsChecked) {
            // Uncheck all if the first box is checked and no other boxes are checked
            newCheckedState = Array(numBoxes).fill(false);
          } else {
            // Check all previous boxes and uncheck the rest
            for (let i = 0; i <= index; i++) {
              newCheckedState[i] = true;
            }
          }

          return {
            ...char,
            [`${type}BoxesState`]: newCheckedState,
          };
        }
        return char;
      });

      localStorage.setItem("characters", JSON.stringify(updatedCharacters));

      const event = new Event("charactersUpdated");
      window.dispatchEvent(event);

      return updatedCharacters;
    });
  };

  return (
    <PageLayout>
      <h1>Main Page</h1>
      {characters
        .filter((char) => char.tab === activeTab)
        .map((char) => (
          <div key={char.id} className={styles.characterContainer}>
            <div className={styles.characterHeader}>
              <GetCharacters char={char} />
              <h3>
                {" "}
                - Rating {char.rating} {""}
                {char.archetype}
              </h3>
            </div>

            {char.healthTracker && (
              <>
                <div className={styles.healthRow}>
                  {Array.from({
                    length: calculateHealthBoxes(char.stats.body.baseStats),
                  }).map((_, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      className={styles.healthBox}
                      checked={
                        char.healthBoxesState
                          ? char.healthBoxesState[index]
                          : false
                      }
                      onChange={() =>
                        handleCheckboxChange(char.id, index, "health")
                      }
                    />
                  ))}
                  <div className={styles.gap}></div>
                  {Array.from({ length: char.stats.body.baseStats }).map(
                    (_, index) => (
                      <input
                        key={index}
                        type="checkbox"
                        className={styles.bodyBox}
                        checked={
                          char.bodyBoxesState
                            ? char.bodyBoxesState[index]
                            : false
                        }
                        onChange={() =>
                          handleCheckboxChange(char.id, index, "body")
                        }
                      />
                    ),
                  )}
                </div>
                <div className={styles.willpowerRow}>
                  {Array.from({
                    length: calculateWillpowerBoxes(
                      char.stats.willpower.baseStats,
                    ),
                  }).map((_, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      className={styles.willpowerBox}
                      checked={
                        char.willpowerBoxesState
                          ? char.willpowerBoxesState[index]
                          : false
                      }
                      onChange={() =>
                        handleCheckboxChange(char.id, index, "willpower")
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
    </PageLayout>
  );
}
