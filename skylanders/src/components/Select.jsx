import React, { useState } from "react";
import Select from "react-select";

const options = [
  {
    label: "Jeu",
    options: [
      { value: "Spyros", label: "Spyro's Adventure" },
      { value: "Giants", label: "Giants" },
      { value: "Swap", label: "Swap Force" },
      { value: "Trap", label: "Trap Team" },
    ],
  },
  {
    label: "Elements",
    options: [
      { value: "Air", label: "Air" },
      { value: "Terre", label: "Terre" },
      { value: "Feu", label: "Feu" },
      { value: "Eau", label: "Eau" },
      { value: "Vie", label: "Vie" },
      { value: "Mort", label: "Mort" },
      { value: "Magie", label: "Magie" },
      { value: "Tech", label: "Tech" },
      { value: "Lumière", label: "Lumière" },
      { value: "Obscurité", label: "Obscurité" },
    ],
  },
  {
    label: "Status",
    options: [
      { Value: true, label: "Dans la collection" },
      { value: false, label: "Hors collection" },
    ],
  },
];

export default function CustomSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    const selectedValues = selected.map((option) => option.value);

    const cardElements = document.getElementsByClassName("card");
    for (let i = 0; i < cardElements.length; i++) {
      const card = cardElements[i];
      const cardValues = card.className
        .split(" ")
        .filter((value) => value !== "card");
      if (selectedValues.length === 0) {
        card.style.display = "flex";
      } else if (selectedValues.every((value) => cardValues.includes(value))) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    }
  };

  return (
    <div className="SelectContainer">
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
}
