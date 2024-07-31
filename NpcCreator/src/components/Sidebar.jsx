import React, { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import GetCharacters from "./GetCharacters";

export default function Sidebar() {
  let lSTabs;
  try {
    const storedTabs = JSON.parse(localStorage.getItem("tabs"));
    lSTabs = storedTabs
      ? [...storedTabs]
      : [{ id: crypto.randomUUID(), name: "Default" }];
  } catch (e) {
    lSTabs = [{ id: crypto.randomUUID(), name: "Default" }];
  }

  const [tabs, setTabs] = useState(lSTabs);

  const event = new CustomEvent("storage");

  const savedActiveTab = localStorage.getItem("activeTab");
  const [activeTab, setActiveTab] = useState(savedActiveTab || lSTabs[0].id);

  const [contextMenu, setContextMenu] = useState(null);

  useEffect(() => {
    saveTabs(tabs);
  }, [tabs]);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
    window.dispatchEvent(event);
  }, [activeTab]);

  function saveTabs(tabs) {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }
  console.log(tabs);
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
      setContextMenu(null);
    }
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

  const handleAddTab = () => {
    const newTabName = prompt("Enter new tab name:", "New Tab");
    if (newTabName) {
      const newTab = {
        id: crypto.randomUUID(),
        name: newTabName,
      };
      setTabs((prevTabs) => [...prevTabs, newTab]);
      setActiveTab(newTab.id);
    }
  };

  return (
    <div className={styles.sidebar} onClick={handleCloseContextMenu}>
      <div className={styles.sidebarTopActions}>
        <button onClick={handleAddTab} className={styles.addTabButton}>
          + Add Tab
        </button>
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
      <GetCharacters activeTab={activeTab} />
    </div>
  );
}
