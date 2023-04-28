import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // create a new array from the 'animals' array
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  console.log(renderedAnimals)

  return (
  <div className="app">
    <button onClick={handleClick}>Add Animal</button>
    <div className="animal-list">{renderedAnimals}</div>
  </div>
  );
}

export default App;
