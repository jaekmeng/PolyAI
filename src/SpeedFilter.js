import React from 'react';

const SpeedFilter = (props) => {
  const handleInputOnChange = (e) => {
    props.setSpeedFilter({
      ...props.speedFilter,
      speed: Number(e.target.value),
    });
  };

  const handleSelectOnChange = (e) => {
    props.setSpeedFilter({ ...props.speedFilter, type: e.target.value });
  };
  return (
    <div className="filter">
      Max Speed of the ship:
      <br />
      <select value={props.speedFilter.type} onChange={handleSelectOnChange}>
        <option value="less">Less than</option>
        <option value="more">More than</option>
        <option value="exactly">Exactly</option>
      </select>
      <input
        type="number"
        min="50"
        max="200"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        value={props.speedFilter.speed}
        onChange={handleInputOnChange}
      />
    </div>
  );
};

export default SpeedFilter;
