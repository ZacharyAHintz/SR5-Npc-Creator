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
