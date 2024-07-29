import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function MatrixComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const comlinks = character.comlinks || [];
  const cyberdecks = character?.cyberdeck || [];
  const rcc = character?.rcc || [];

  let comlinksArray = [];

  Object.keys(comlinks).forEach((key) => {
    comlinksArray.push(comlinks[key]);
  });

  let cyberdeckArray = [];

  Object.keys(cyberdecks).forEach((key) => {
    cyberdeckArray.push(cyberdecks[key]);
  });
  let rccArray = [];

  Object.keys(rcc).forEach((key) => {
    rccArray.push(rcc[key]);
  });

  return (
    <div>
      {comlinksArray.map((object, index) => {
        const name = object.name;
        const rating = object.rating;

        return (
          <div key={`comlinks-${index}`}>
            <p>{name}</p>
            <div>Rating: {rating}</div>
          </div>
        );
      })}
      <hr />

      <h2>Cyberdecks</h2>

      {cyberdeckArray.map((object, index) => {
        const name = object.name;
        const rating = object.rating;
        const attributeArray = object.attributeArray;
        const programs = object.programs;

        return (
          <div key={`cyberdecks-${index}`}>
            <p>{name}</p>
            <div>
              Rating: {rating}, Attributes Array: {attributeArray}, Programs:{" "}
              {programs}
            </div>
          </div>
        );
      })}
      <hr />

      <h2>RCC</h2>

      {rccArray.map((object, index) => {
        const name = object.name;
        const rating = object.rating;
        const dataProcessing = object.dataProcessing;
        const firewall = object.firewall;

        return (
          <div key={`RCC-${index}`}>
            <p>{name}</p>
            <div>
              Rating: {rating}, Data Processing: {dataProcessing}, Firewall:{" "}
              {firewall}
            </div>
          </div>
        );
      })}
    </div>
  );
}
