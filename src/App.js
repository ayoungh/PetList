import React, { useState, useEffect } from 'react';
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
  const [petName, setPetName] = useState("");
  const [animalType, setAnimalType] = useState("snake");
  const [petAge, setPetAge] = useState(0);

  let uniqueAnimalTypes = [...new Set(pets.map(item => item.animalType))];

  const handleAddPet = e => {
    console.log('add new pet', petName, animalType, petAge);
    setPets([...pets, { name: petName, animalType: animalType, age: petAge }]);
    //update the animal types?
    //uniqueAnimalTypes = [...new Set(pets.map(item => item.animalType))];
  };   
  
  const handleRemovePet = e => {
    console.log("remove pet: ", e)
    let petList  = pets;
    petList.splice(e, 1);
    setPets([...petList]);
  };      

  return (
    <div className="App">
      <header className="App-header">
        PetList
      </header>

      <ul className="petList">
        {pets.map((pet, inx) => <li key={inx}><strong>{pet.name}</strong> is a {pet.animalType} (Age: {pet.age}) <button onClick={() => handleRemovePet(inx)}>Remove Pet</button></li>)}
      </ul>

      <input type="text" placeholder="Pet Name" onChange={(e)=>setPetName(e.target.value)}/>
      <select onChange={(e) => setAnimalType(e.target.value)}>
        {uniqueAnimalTypes.map((animalType, inx) => { return (<option>{animalType}</option>) })}
      </select>
      <input type="number" placeholder="Pet age" onChange={(e)=>setPetAge(e.target.value)}/>
      <button onClick={()=>handleAddPet()}>Add New Pet</button>
    </div>
  );  
}

export default App;
