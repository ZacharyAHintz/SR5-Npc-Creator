import React, { useState, useEffect } from "react";
import WeaponsComponent from "../characterSheetComponents/WeaponsComponent";
import EquipmentComponent from "../characterSheetComponents/EquipmentComponent";
import VehicleComponent from "../characterSheetComponents/VehicleComponent";
import DroneComponent from "../characterSheetComponents/DroneComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/SharedTabs.module.css";

export default function EquipmentTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  return (
    <div className={styles.container}>
      <hr className={styles.separator} />
      <div>
        <h2 className={styles.header}>Weapons:</h2>
        <WeaponsComponent id={id} />
        <hr className={styles.separator} />
        <h2 className={styles.header}>Equipment:</h2>
        <EquipmentComponent id={id} />
        <hr className={styles.separator} />
        <h2 className={styles.header}>Vehicles:</h2>
        <VehicleComponent id={id} />
        <h2 className={styles.header}>Drones:</h2>
        <DroneComponent id={id} />
      </div>
    </div>
  );
}
