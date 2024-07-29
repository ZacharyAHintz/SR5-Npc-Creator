import React, { useState, useEffect } from "react";
import WeaponsComponent from "../characterSheetComponents/WeaponsComponent";
import EquipmentComponent from "../characterSheetComponents/EquipmentComponent";
import VehicleComponent from "../characterSheetComponents/VehicleComponent";
import DroneComponent from "../characterSheetComponents/DroneComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EquipmentTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  return (
    <div>
      <hr />
      <div>
        <h2>Weapons:</h2>
        <WeaponsComponent id={id} />
        <hr />
        <h2>Equipment:</h2>
        <EquipmentComponent id={id} />
        <hr />
        <h2>Vehicles:</h2>
        <VehicleComponent id={id} />
        <h2>Drones:</h2>
        <DroneComponent id={id} />
      </div>
    </div>
  );
}
