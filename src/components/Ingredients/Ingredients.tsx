import React from 'react';
import {Ingredient} from '../../types';
import './Ingredients.css';

interface Props {
  ingredients: Ingredient;
  count: number;
}

const Ingredients: React.FC<Props> = ({ingredients, count, }) => {
  return (
    <div className='ingredient'>
      <div className='ingredient-info'>
        <img className='ingredient-img' src={ingredients.image} alt={ingredients.name}/>
        <span className='ingredient-name'>{ingredients.name}</span>
      </div>
      <div>
        <span className='ingredient-count'>x{count}</span>
        <button>Удалить ингредиет</button>
      </div>
    </div>
  );
};

export default Ingredients;