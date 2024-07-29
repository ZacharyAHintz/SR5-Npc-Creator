import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function VehicleComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const characterVehicles = character.vehicles || [];

  let vehicleArray = [];

  Object.keys(characterVehicles).forEach((key) => {
    vehicleArray.push(characterVehicles[key]);
  });

  return (
    <div>
      {vehicleArray.map((object, index) => {
        const name = object.vehicle;
        const accel = object.accel;
        const body = object.body;
        const handl = object.handl;
        const pilot = object.pilot;
        const seats = object.seats;
        const speed = object.speed;
        const armor = object.armor;
        const sensor = object.sensor;
        const type = object.type;
        const craft = object.craft;

        return (
          <div key={`vehicle-${index}`}>
            <p>
              {name}: "{type}"
            </p>
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
