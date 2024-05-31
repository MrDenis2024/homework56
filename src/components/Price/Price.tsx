import React from 'react';
import {Ingredient, IngredientQuantity} from '../../types';

interface Props {
  ingredientsCount: IngredientQuantity[];
  ingredients: Ingredient[];
}

const Price: React.FC<Props> = ({ingredientsCount, ingredients}) => {
  const burgerPrice = ingredients.reduce((acc, ingredient, index) => {
    return acc + ingredient.price * ingredientsCount[index].count;
  }, 30);

  return (
    <div>
      Цена бургера составила: {burgerPrice} сом
    </div>
  );
};

export default Price;