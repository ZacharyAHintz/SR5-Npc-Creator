import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import GetCharacters from "./GetCharacters";

export default function Sidebar() {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Default" },
    { id: 2, name: "Heroes" },
    { id: 3, name: "Villains" },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [contextMenu, setContextMenu] = useState(null);

  const handleRightClick = (e, tab) => {
    e.preventDefault();
    setContextMenu({ mouseX: e.clientX, mouseY: e.clientY, tab });
  };

  const handleRenameTab = () => {
    const newName = prompt("Enter new tab name:", contextMenu.tab.name);
    if (newName) {
      setTabs((prevTabs) =>
        prevTabs.map((tab) =>
          tab.id === contextMenu.tab.id ? { ...tab, name: newName } : tab,
        ),
      );
    }
    setContextMenu(null);
  };

  const handleDeleteTab = () => {
    if (contextMenu && contextMenu.tab) {
      setTabs((prevTabs) =>
        prevTabs.filter((tab) => tab.id !== contextMenu.tab.id),
      );
      setContextMenu(null);
      if (contextMenu.tab.id === activeTab) {
        setActiveTab(tabs[0]?.id || null);
      }
    }
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <div className={styles.sidebar} onClick={handleCloseContextMenu}>
      <div className={styles.sidebarTopActions}>
        {contextMenu && (
          <div
            className={styles.contextMenu}
            style={{
              top: contextMenu.mouseY,
              left: contextMenu.mouseX,
            }}
          >
            <button onClick={handleRenameTab}>Rename</button>
            <button onClick={handleDeleteTab}>Delete</button>
          </div>
        )}
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div key={tab.id} className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
              onContextMenu={(e) => handleRightClick(e, tab)}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>
      <GetCharacters tabName={tabs.find((tab) => tab.id === activeTab)?.name} />
    </div>
  );
}
