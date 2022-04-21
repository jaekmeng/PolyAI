import React from 'react';

const ColourFilter = (props) => {
  const colours = ['Red', 'Blue', 'Green'];
  let checklist = [];

  const handleCheckboxOnChange = (e) => {
    let currentColours = props.colourFilter.colours;
    let checkedColour = e.target.value;

    if (e.target.checked) {
      props.setColourFilter({
        ...props.colourFilter,
        colours: [...currentColours, checkedColour],
      });
    } else {
      props.setColourFilter({
        ...props.colourFilter,
        colours: currentColours.filter((item) => item !== checkedColour),
      });
    }
  };

  const handleSelectOnChange = (e) => {
    props.setColourFilter({ ...props.colourFilter, type: e.target.value });
  };

  colours.map((item) => {
    checklist.push(
      <div>
        <input
          type="checkbox"
          value={item.toLowerCase()}
          key={item}
          onChange={handleCheckboxOnChange}
        />
        {item}
      </div>
    );
  });
  return (
    <div className="filter">
      Colour of the ship:
      <br />
      <select value={props.colourFilter.type} onChange={handleSelectOnChange}>
        <option value="all">All of the selected</option>
        <option value="any">Any of the selected</option>
        <option value="none">None of the selected</option>
      </select>
      {checklist}
    </div>
  );
};

export default ColourFilter;
