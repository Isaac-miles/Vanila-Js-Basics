import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pounded Yam',
    description: 'Edo fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Oha',
    description: 'A Igbo specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Fura',
    description: 'Fulani, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Oje',
    description: 'Healthy.Igala Special...',
    price: 18.99,
  },
];
const AvailableMeals = () =>{

    const mealsList = DUMMY_MEALS.map( (meal) =>{
        return <MealItem 
        id ={meal.id}
        key= {meal.id}
         name ={meal.name}
          description ={meal.description}
           price={meal.price}
           />
    });

  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
     
    </section>
  )
}

export default AvailableMeals