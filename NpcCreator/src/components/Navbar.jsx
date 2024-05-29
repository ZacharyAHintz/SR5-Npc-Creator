import logo from "../assets/shadowrun-logo-totem-fade_66cc3e5f.png";
import styles from "../styles/Navbar.module.css";
import CharacterSheetButton from "./CharacterSheetButton.jsx";
import NewCharacterButton from "./NewCharacterButton.jsx";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />
      <CharacterSheetButton />
      <NewCharacterButton />
    </div>
  );
}
