import React, { useState } from 'react';
import './App.css';

function App() {

  //Initial data
  let petData = [
    {name: "Tony", animalType: "snake", age: 2 },
    { name: "Tom", animalType: "cat", age: 1 },
    { name: "Cleo", animalType: "dog", age: 3 },
    { name: "Bella", animalType: "cat", age: 4 },
    { name: "Bouncer", animalType: "dog", age: 5 },
  ];

  //create state with initial pet data
  const [pets, setPets] = useState(petData);


  return (
    <div className="App">
      <header className="App-header">
        PetList
      </header>

      <ul className="petList">
        {pets.map((pet, inx)=><li key={inx}>{pet.name}</li>)}
      </ul>

    </div>
  );
}

export default App;
