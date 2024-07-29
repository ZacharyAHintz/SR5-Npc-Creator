import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/MainPage.module.css";

export default function MainPage() {
  const [characters, setCharacters] = useState([]);

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
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("charactersUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("charactersUpdated", handleStorageChange);
    };
  }, []);

  const calculateHealthBoxes = (bodyStats) => {
    return Math.floor(bodyStats / 2) + 8;
  };

  const calculateWillpowerBoxes = (willpowerStats) => {
    return Math.floor(willpowerStats / 2) + 8;
  };

  return (
    <PageLayout>
      <h1>Main Page</h1>
      {characters.map((char) => (
        <div key={char.id} className={styles.characterContainer}>
          <h2>{char.name}</h2>
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
                  />
                ))}
                <div className={styles.gap}></div>
                {Array.from({ length: char.stats.body.baseStats }).map(
                  (_, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      className={styles.bodyBox}
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
