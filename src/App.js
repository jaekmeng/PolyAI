import React, { useState } from 'react';
import ColourFilter from './ColourFilter';
import SpeedFilter from './SpeedFilter';
import DateFilter from './DateFilter';
import PulseLaserFilter from './PulseLaserFilter';
import './style.css';

export default function App() {
  return <SpaceshipFilter />;
}

const SpaceshipFilter = () => {
  const [queryString, setQueryString] = useState('');
  const [colourFilter, setColourFilter] = useState({
    type: 'all',
    colours: [],
  });
  const [speedFilter, setSpeedFilter] = useState({ type: 'less', speed: 50 });
  const [dateFilter, setDateFilter] = useState({ type: 'after', date: null });
  const [pulseLaserFilter, setPulseLaserFilter] = useState(false);

  const generateQuery = () => {
    let params = new URLSearchParams();

    if (colourFilter.colours.length) {
      params.append('colour-type', colourFilter.type);
      params.append('colours', colourFilter.colours.join(','));
    }

    if (speedFilter.speed !== null) {
      params.append('speed-type', speedFilter.type);
      params.append('speed', speedFilter.speed);
    }

    if (dateFilter.date !== null) {
      params.append('date-type', dateFilter.type);
      params.append('date', dateFilter.date.toLocaleDateString());
    }

    if (pulseLaserFilter !== null) {
      params.append('pulse-laser', pulseLaserFilter);
    }

    setQueryString('?' + decodeURIComponent(params));
  };
  return (
    <div>
      <h1>Mr Little Z's Spaceship Filter App</h1>
      <FilterContainer
        colourFilter={colourFilter}
        setColourFilter={setColourFilter}
        speedFilter={speedFilter}
        setSpeedFilter={setSpeedFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        pulseLaserFilter={pulseLaserFilter}
        setPulseLaserFilter={setPulseLaserFilter}
      />
      <hr />
      <button className="generate-query" onClick={generateQuery}>
        Generate Query
      </button>
      <div>Query String: api.com/spaceships{queryString}</div>
    </div>
  );
};

const FilterContainer = (props) => {
  return (
    <div className="filter-container">
      <ColourFilter
        colourFilter={props.colourFilter}
        setColourFilter={props.setColourFilter}
      />
      <SpeedFilter
        speedFilter={props.speedFilter}
        setSpeedFilter={props.setSpeedFilter}
      />
      <DateFilter
        dateFilter={props.dateFilter}
        setDateFilter={props.setDateFilter}
      />
      <PulseLaserFilter
        pulseLaserFilter={props.pulseLaserFilter}
        setPulseLaserFilter={props.setPulseLaserFilter}
      />
    </div>
  );
};
