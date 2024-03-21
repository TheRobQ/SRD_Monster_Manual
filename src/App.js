import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Monsterlist from './components/monsterlist/Monsterlist';
import TextInput from './components/textInput/TextInput'
import './App.css';


function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  //const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  useEffect(()=>{
    getData()
  },[]);

  const filteredMonsters = useMemo( () => {
    const filteredList = monsters.filter( monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return filteredList;
  }, [monsters, searchField]);

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
      console.log(data.monsters)
    } catch( error ) {
      console.log(error);
    }
  };

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Router>
      <div className="App">
        <TextInput type="text"
        className='monsterSearch'
        onChangeHandler={onSearchChange}
        placeholder='Search' />
        <Monsterlist monsters = {filteredMonsters} />
      </div>
      <Routes>
        <Route path='/expanded-card'>
          {/* <ExpandedCard /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
