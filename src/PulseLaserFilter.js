import React from 'react';

const PulseLaserFilter = (props) => {
  const handleOnChange = (e) => {
    if (e.target.value === 'true') {
      props.setPulseLaserFilter(true);
    } else {
      props.setPulseLaserFilter(false);
    }
  };

  return (
    <div className="filter">
      Has pulse laser?
      <input
        type="radio"
        value={true}
        name="pulse-laser"
        checked={props.pulseLaserFilter}
        onChange={handleOnChange}
      />
      Yes
      <input
        type="radio"
        value={false}
        name="pulse-laser"
        checked={!props.pulseLaserFilter}
        onChange={handleOnChange}
      />
      No
    </div>
  );
};

export default PulseLaserFilter;
