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
  const [petName, setPetName] = useState("");
  const [animalType, setAnimalType] = useState("snake");
  const [petAge, setPetAge] = useState(0);
  const [nameSort, setNameSort] = useState(false);

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

      <main>
      <div className="petList">
        <ul>
          {!nameSort && pets.sort((a, b) => { console.log(a, b); return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 }).map((pet, inx) => <li key={inx}><strong>{pet.name}</strong> is a {pet.animalType} (Age: {pet.age}) <button onClick={() => handleRemovePet(inx)}>Remove Pet</button></li>)}
          {nameSort && pets.sort((a, b) => { console.log(a, b); return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1 }).map((pet, inx) => <li key={inx}><strong>{pet.name}</strong> is a {pet.animalType} (Age: {pet.age}) <button onClick={() => handleRemovePet(inx)}>Remove Pet</button></li>)}
        </ul>
        <button className="sort" onClick={() => setNameSort(!nameSort)}>Sort by Name ({nameSort ? "Ascending" : "Decending"})</button>
      </div>

      <div className="addNewPet">

        <h2>Add a new Pet</h2>

        <div className="fieldGroup">
          <label htmlFor="petName">
            Name:
          </label>
          <input id="petName" type="text" placeholder="Cleo" onChange={(e)=>setPetName(e.target.value)}/>
        </div>

        <div className="fieldGroup">
          <label htmlFor="petType">
            Type:
          </label>        
          <select id="petType" onChange={(e) => setAnimalType(e.target.value)}>
            {uniqueAnimalTypes.map((animalType, inx) => { return (<option>{animalType}</option>) })}
          </select>
        </div>

        <div className="fieldGroup">
          <label htmlFor="petAge">
            Age:
          </label>        
          <input id="petAge" type="number" placeholder="6" onChange={(e)=>setPetAge(e.target.value)}/>
        </div>

        <button onClick={()=>handleAddPet()}>Add New Pet</button>

      </div>

      </main>

    </div>
  );  
}

export default App;
