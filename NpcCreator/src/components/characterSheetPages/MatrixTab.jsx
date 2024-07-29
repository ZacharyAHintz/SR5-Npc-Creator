import React, { useState, useEffect } from "react";
import MatrixComponent from "../characterSheetComponents/MatrixComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function MatrixTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <hr />
      <h2>Comlinks</h2>
      <div>
        <MatrixComponent id={id} />
      </div>
    </div>
  );
}
