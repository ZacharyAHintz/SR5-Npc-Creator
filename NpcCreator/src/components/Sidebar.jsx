import GetCharacters from "./GetCharacters";
import styles from "../styles/Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <GetCharacters />
      <p>sidebar</p>
    </div>
  );
}
