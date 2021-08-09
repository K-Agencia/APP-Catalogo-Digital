import React, { useState } from "react";
import "../css/SearchBar.css";
import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios } from "../Constants/Productos"
var accents = require('remove-accents');

function SearchBar() {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  let data = UsoConsultorio.concat(LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios);

  const handleFilter = (event) => {

    let searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {

      let wordU = accents.has(searchWord); //true
      let word = value.name;

      if (!wordU) { word = accents.remove(word); }

      return word.toLowerCase().includes(searchWord.toLowerCase());

    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className="form-control me-2"
          type="search"
          value={wordEntered}
          onChange={handleFilter}
          placeholder="Buscar"
          aria-label="Search"
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult" id="dataResult">
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <a className="dataItem" href={`/${value._id}`} key={index}>
                <p>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;