import React from "react";
import styles from "../styles/PageLayout.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function PageLayout({ children }) {
  return (
    <div className={styles.pages}>
      <Navbar />
      {children}
      <Sidebar />
    </div>
  );
}
