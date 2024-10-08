import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/DroneComponent.module.css";

export default function DroneComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const drones = character?.drones || [];
  let droneArray = [];

  Object.keys(drones).forEach((key) => {
    droneArray.push(drones[key]);
  });

  return (
    <div>
      <h3 className={styles.title}>Drones:</h3>
      {droneArray.map((object, index) => {
        const name = object.drone;
        const accel = object.accel;
        const body = object.body;
        const handl = object.handl;
        const pilot = object.pilot;
        const seats = object.seats;
        const speed = object.speed;
        const armor = object.armor;
        const sensor = object.sensor;
        const size = object.size;

        return (
          <div key={index} className={styles.input}>
            <h3 className={styles.title}>{name}</h3>
            <div>
              Accel: {accel}, Body: {body}, Handl: {handl}, Pilot: {pilot},
              Seats: {seats}, Speed: {speed}, Armor: {armor}, Sensor: {sensor}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
