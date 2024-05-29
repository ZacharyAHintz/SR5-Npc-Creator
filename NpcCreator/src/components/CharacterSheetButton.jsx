import { useRef, useState } from "react";
import styles from "../styles/CharacterSheetButton.module.css";
import * as React from "react";
import CharacterSheet from "./CharacterSheet";
import ToggleDialog from "../hooks/ToggleDialog.jsx";

export default function CharacterSheetButtons() {
  return (
    <ToggleDialog name="Character Name">
      <CharacterSheet />
    </ToggleDialog>
  );
}
