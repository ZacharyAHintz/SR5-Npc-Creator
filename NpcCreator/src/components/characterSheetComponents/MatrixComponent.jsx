import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function MatrixComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const comlinks = character.comlinks || [];

  let comlinksArray = [];

  Object.keys(comlinks).forEach((key) => {
    comlinksArray.push(comlinks[key]);
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
    </div>
  );
}
