import React, { useState } from 'react';
import './style.css';

export default function DelayedCounter() {
  const [states, setStates] = useState([
    {
      state: 'new jersey',
      cities: ['jersey', 'new port'],
    },
    {
      state: 'Texas',
      cities: ['Houstan', 'dallas'],
    },
    {
      state: 'NC',
      cities: ['Raleigh', 'Charllotte'],
    },
  ]);
  const [cities, setCities] = useState([]);
  const onStateChange = (event) => {
    const selectedState = event.target.value; // Get the selected state name
    console.log(selectedState);

    // Find the state object in the array that matches the selected state
    const state = states.find((state) => state.state === selectedState);
    console.log(state);
    setCities(state ? state.cities : []); // Set the cities of the selected state
  };
  return (
    <>
      <select name="states" id="state" onChange={onStateChange}>
        {states.map((state, index) => (
          <option key={index} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>
      <select name="cities" id="cities">
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
}
