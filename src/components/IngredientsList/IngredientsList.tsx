import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import {Ingredient, IngredientQuantity} from '../../types';

interface Props {
  allIngredient: Ingredient[];
  ingredientCount: IngredientQuantity[]
}

const IngredientsList: React.FC<Props> = ({allIngredient, ingredientCount}) => {
  return (
    <div className='ingredients-list'>
      {allIngredient.map((ingredient, index) => (
        <Ingredients key={ingredient.name} ingredients={ingredient} count={ingredientCount[index].count}/>
      ))}
    </div>
  );
};

export default IngredientsList;