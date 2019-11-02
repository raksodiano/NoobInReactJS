import React from 'react';
import LocationList from './component/LocationList';
import './App.css';

function App() {
  const cities = [
    "Madrid,es",
    "Lima,pe",
    "London,uk",
    "Washington,us",
    "San Juan de los Morros,ve",
  ];

  return (
    <div className="App">
      <LocationList 
        cities={cities}
      />
    </div>
  );
}

export default App;
