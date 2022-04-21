import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = (props) => {
  const minDate = new Date('1980-01-01');
  const maxDate = new Date('2020-12-31');
  const handleSelectOnChange = (e) => {
    props.setDateFilter({ ...props.dateFilter, type: e.target.value });
  };
  const handleDatePickerOnChange = (date) => {
    props.setDateFilter({ ...props.dateFilter, date: date });
  };
  return (
    <div className="filter">
      Date of manufacture:
      <br />
      <select value={props.dateFilter.type} onChange={handleSelectOnChange}>
        <option value="after">After</option>
        <option value="before">Before</option>
        <option value="exact">On the exact date</option>
      </select>
      <DatePicker
        className="date-picker"
        selected={props.dateFilter.date}
        onChange={handleDatePickerOnChange}
        minDate={minDate}
        maxDate={maxDate}
        showYearDropdown
        dropdownMode="select"
        placeholderText="Select between 1980 and 2020"
      />
    </div>
  );
};

export default DateFilter;
