import React from 'react';
import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHendler = event =>{
    event.preventDefault();

    const enteredAmount =amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
  
    if(enteredAmount.trim().length ===0 || 
    enteredAmountNumber <1 || 
    enteredAmountNumber >5){
      setAmountIsValid(false);
      return;
    }  
  
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHendler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add +</button>
      {!amountIsValid && <p>Entre com valor valido</p>}
    </form>
  )
};


export default MealItemForm;