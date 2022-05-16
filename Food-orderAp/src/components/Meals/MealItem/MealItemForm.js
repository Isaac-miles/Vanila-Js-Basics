import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';

import Input from '../../UI/Input';

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = e =>{
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return;
    }
    // we are not reaching out to our context here since we are only receiving amount here
    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit ={submitHandler}>
        <Input
         label= 'Amount' 
          ref = {amountInputRef}
         input={{  
          id:'amoount', 
          type:'number', 
          min:'1', 
          max:'5', 
          step:'1',
          defaultValue:'1'}}
          />
        <button>+ Add</button>
        {!amountIsValid && <p>please enter a valid amount.</p>}
    </form>
  )
}

export default MealItemForm;