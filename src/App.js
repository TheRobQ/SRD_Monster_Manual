import React, { useState, useEffect } from 'react';
import Monsterlist from './components/monsterlist/Monsterlist';
import './App.css';


function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  useEffect(()=>{
    getData()
  },[]);

  const getData = async () => {
    try{
      let response = await fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      } )
      let data = await response.json();
      setMonsters(data.monsters);
    } catch( error ) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Monsterlist monsters = {monsters} />
    </div>
  );
}

export default App;
