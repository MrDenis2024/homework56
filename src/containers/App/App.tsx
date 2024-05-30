import './App.css';
import {Ingredient, IngredientQuantity} from '../../types';

import meatImage from '../../assets/meat.jpg';
import saladImage from '../../assets/salad.jpg';
import baconImage from '../../assets/bacon.jpg';
import cheeseImage from '../../assets/cheese.jpg';
import {useState} from 'react';
import IngredientsList from '../../components/IngredientsList/IngredientsList';



const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage}
];

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientQuantity[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);



  return (
    <div className='app'>
      <div className='ingredients-info'>
        <h2>Ингрединты</h2>
        <IngredientsList allIngredient={INGREDIENTS} ingredientCount={ingredients} />
      </div>
      <div>
      </div>
    </div>
  );
};

export default App;
