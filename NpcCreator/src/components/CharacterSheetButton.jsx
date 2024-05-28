import { useRef, useState } from "react";
//import CharacterSheet from "./CharacterSheet";
import styles from "../styles/CharacterSheetButton.module.css";
import * as React from "react";
import CharacterSheet from "./CharacterSheet";
import ToggleDialog from "../hooks/ToggleDialog.jsx";

export default function CharacterSheetButtons() {
  return (
    <ToggleDialog>
      <CharacterSheet />
    </ToggleDialog>
  );
}
