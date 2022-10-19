import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/Recipe';
  
const App = () => {
  const APP_ID = '660399ba';
  const APP_KEY = 'd3372b0527f6a6804e81c3d1847d9585';
  const [recetas, setRecetas] = useState([]);
  const [busqueda, setSearch] = useState("");
  const [query, setQuery] = useState("pollo");
  useEffect(() => {
    getRecetas();
  }, [query])
  const getRecetas = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecetas(data.hits);
    // console.log(data);
  
  };
  const actualizarBusqueda = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(busqueda);
    setSearch("");
  }
  
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={busqueda}
             onChange={actualizarBusqueda} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
      <div className="recetas">
        {recetas.map(receta => (
          <Recipe
            llave ={receta.recipe.label}
            titulo ={receta.recipe.label}
            calorias ={receta.recipe.calories}
            imagen ={receta.recipe.image}
            ingredientes ={receta.recipe.ingredients}
          />
  
        ))}
      </div>
  
    </div>
  );
}
  
export default App;