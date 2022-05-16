import React,{ useContext} from 'react'
import MealItemForm from './MealItemForm';
import classes from  './MealItem.module.css';
import CartContext from '../../../Store/cart-context';

function MealItem(props) {
 const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount =>{
      // lets reach out to the contest since we will be getting other relevant inputs
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price 
      });
    };
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>

        <div>
        < MealItemForm onAddToCart ={addToCartHandler} />
        </div>
    </li>
  )
}

export default MealItem