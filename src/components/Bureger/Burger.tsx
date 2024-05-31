import React from 'react';
import {IngredientQuantity} from '../../types';
import './Burger.css';

interface Props {
  ingredientsCount: IngredientQuantity[];
}

const Burger: React.FC<Props> = ({ingredientsCount}) => {

  const divs = ingredientsCount.reduce<React.ReactNode[]>((acc, ingredient) => {
    if(ingredient.name === 'Cheese') {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(<div key={ingredient.name + i} className="Cheese"></div>);
      }
    }
    if(ingredient.name === 'Salad') {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(<div key={ingredient.name + i} className="Salad"></div>);
      }
    }
    if(ingredient.name === 'Bacon') {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(<div key={ingredient.name + i} className="Bacon"></div>);
      }
    }
    if(ingredient.name === 'Meat') {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(<div key={ingredient.name + i} className="Meat"></div>);
      }
    }
    return acc;
  }, []);

  return (
    <>
      <div className='Burger'>
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>
        {divs}
        <div className='BreadBottom'></div>
      </div>
    </>
  );
};

export default Burger;