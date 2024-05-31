import './App.css';
import {Ingredient, IngredientQuantity} from '../../types';
import {useState} from 'react';
import Burger from '../../components/Bureger/Burger';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import Price from '../../components/Price/Price';

import meatImage from '../../assets/meat.jpg';
import saladImage from '../../assets/salad.jpg';
import baconImage from '../../assets/bacon.jpg';
import cheeseImage from '../../assets/cheese.jpg';


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

  const addIngredients = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if(ingredient.name === name) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return ingredient;
      });
    });
  };

  const removeIngredients = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if(ingredient.name === name) {
          return {...ingredient, count: ingredient.count - 1};
        }
        return ingredient;
      });
    });
  };

  return (
    <div className='app'>
      <div className='ingredients-info'>
        <h2>Ингредиенты</h2>
        <IngredientsList allIngredient={INGREDIENTS} ingredientCount={ingredients} addIngredient={addIngredients} removeIngredient={removeIngredients}/>
      </div>
        <div className='ingredient-burger'>
          <h2>Бургер</h2>
          <Burger ingredientsCount={ingredients} />
          <Price ingredientsCount={ingredients} ingredients={INGREDIENTS} />
        </div>
    </div>
  );
};

export default App;
