import React from 'react';
import style from './recipe_module.css';
  
const Recipe = ({titulo,calorias,imagen,ingredientes}) =>{
    return(
        <div className={style.recipe}>
            <h1>{titulo}</h1>
            <ol>
                {ingredientes.map(ingrediente=>(
                    <li>{ingrediente.text}</li>
                ))}
            </ol>
              
<p>Calorias : {calorias}</p>
  
            <img className={style.image} src={imagen} alt=""/>
  
        </div>
    );
  
}
export default Recipe;