import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Cards from './components/Cards';
import Foods from './components/Foods';
import Login from './components/Login';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="App">
      <Navbar onSearchChange={handleSearchChange}></Navbar>
      <Cards></Cards>
      <Foods searchQuery={searchQuery} ></Foods>
    </div>
  );
}

export default App;
