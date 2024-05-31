import React from 'react';
import {Ingredient} from '../../types';
import './Ingredients.css';

interface Props {
  ingredients: Ingredient;
  count: number;
  onAddIngredient: React.MouseEventHandler;
  onRemoveIngredient: React.MouseEventHandler;
}

const Ingredients: React.FC<Props> = ({ingredients, count, onAddIngredient, onRemoveIngredient}) => {
  return (
    <div className='ingredient'>
      <div className='ingredient-info' onClick={onAddIngredient}>
        <img className='ingredient-img' src={ingredients.image} alt={ingredients.name}/>
        <span className='ingredient-name'>{ingredients.name}</span>
      </div>
      <div>
        <span className='ingredient-count'>x{count}</span>
        {count > 0 ? <button className='ingredient-btn' onClick={onRemoveIngredient}>Удалить ингредиет</button> : null}
      </div>
    </div>
  );
};

export default Ingredients;