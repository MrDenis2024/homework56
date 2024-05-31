import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import {Ingredient, IngredientQuantity} from '../../types';

interface Props {
  allIngredient: Ingredient[];
  ingredientCount: IngredientQuantity[]
  addIngredient: (name: string) => void;
  removeIngredient: (name: string) => void;
}

const IngredientsList: React.FC<Props> = ({allIngredient, ingredientCount, addIngredient, removeIngredient}) => {
  return (
    <div className='ingredients-list'>
      {allIngredient.map((ingredient, index) => (
        <Ingredients key={ingredient.name} ingredients={ingredient} count={ingredientCount[index].count} onAddIngredient={() => addIngredient(ingredient.name)} onRemoveIngredient={() => removeIngredient(ingredient.name)}/>
      ))}
    </div>
  );
};

export default IngredientsList;